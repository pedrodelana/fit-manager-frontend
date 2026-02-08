import api from "@/services/api";

export async function getHome() {
    return await api.get('/');
}