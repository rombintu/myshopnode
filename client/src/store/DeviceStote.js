import {makeAutoObservable} from "mobx"

export default class DeviceStore{
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Компрессоры"},
            {id: 4, name: "Мультиварки"},
            {id: 5, name: "Машины"},
            {id: 6, name: "Стиральные"},
            {id: 7, name: "Холодные"},
            {id: 8, name: "Горячие"},
        ]
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Philips"},
            {id: 5, name: "ViewSonic"},
            {id: 6, name: "Asus"},
        ]
        this._devices = [
            {
                "id": 4,
                "name": "12 pro",
                "price": 99990,
                "rating": 0,
                "img": "f4771c53-d4dc-491e-b6c9-426ebdb24bf2.jpg",
                "createdAt": "2021-05-01T18:16:33.185Z",
                "updatedAt": "2021-05-01T18:16:33.185Z",
                "typeId": 2,
                "brandId": 1
            },
            {
                "id": 5,
                "name": "vestfrost",
                "price": 27000,
                "rating": 0,
                "img": "45272bc2-0e95-4e9e-aa71-ac59612d8a6c.jpg",
                "createdAt": "2021-05-01T18:32:26.566Z",
                "updatedAt": "2021-05-01T18:32:26.566Z",
                "typeId": 1,
                "brandId": 2
            },
            {
                "id": 6,
                "name": "smeg",
                "price": 19000,
                "rating": 0,
                "img": "5d25b60d-cd0f-4ba7-91be-64a464c15908.jpg",
                "createdAt": "2021-05-01T18:34:06.791Z",
                "updatedAt": "2021-05-01T18:34:06.791Z",
                "typeId": 1,
                "brandId": 1
            },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}