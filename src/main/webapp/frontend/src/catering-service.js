const url = `${window.location.origin}/cms_war_exploded/api/bread`;

export default class CateringService {

    async getAllBread() {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(res.status);
            return await res.json();
        } catch (err) {
            console.error("Fout bij ophalen broodjes", err);
            return [];
        }
    }

    async addBread(bread) {
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bread)
            });

            if (!res.ok) throw new Error(res.status);
            return await res.json();

        } catch (err) {
            console.error("Fout bij toevoegen broodje", err);
            return null;
        }
    }

    async deleteBread(name) {
        try {
            const res = await fetch(`${url}/${name}`, {
                method: "DELETE",
            });

            return res.ok;

        } catch (err) {
            console.error("Fout bij verwijderen broodje", err);
            return false;
        }
    }

    async updateBread(originalName, bread){
        const res = await fetch(`${url}/${originalName}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(bread)
        });
        return res.ok;
    }

}
