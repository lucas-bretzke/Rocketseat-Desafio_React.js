import { http } from "./config";


type TypeItem = {
    id: number
    name: string
    price: number
    img: string
    description: string
    category: string
}

export default {
    getItems: async () => {
        const response = await http.get<TypeItem[]>('/items')
        return response?.data
    },
    deleteItem: async (req: any) => {
        const response = await http.delete(`/items/${req.id}`, req)
        return response?.data
    }
}