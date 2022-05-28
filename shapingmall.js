var products = [
    { name: "mobile", quantity: 200, avaragePrise: 15000, sold: 150, balance: function () { return this.quantity - this.sold } },
    { name: "laptop", quantity: 100, avaragePrise: 40000, sold: 70, balance: function () { return this.quantity - this.sold } },
    { name: "smart-watch", quantity: 80, avaragePrise: 1500, sold: 20, balance: function () { return this.quantity - this.sold } },
    { name: "video-game", quantity: 50, avaragePrise: 5000, sold: 25, balance: function () { return this.quantity - this.sold } },
    { name: "camera", quantity: 35, avaragePrise: 20000, sold: 17, balance: function () { return this.quantity - this.sold } },
    { name: "fan", quantity: 150, avaragePrise: 2000, sold: 70, balance: function () { return this.quantity - this.sold } },
    { name: "iphone", quantity: 30, avaragePrise: 50000, sold: 22, balance: function () { return this.quantity - this.sold } },
    { name: "charger", quantity: 200, avaragePrise: 500, sold: 144, balance: function () { return this.quantity - this.sold } },
    { name: "keyboard", quantity: 70, avaragePrise: 1000, sold: 45, balance: function () { return this.quantity - this.sold } }
]
var prodectStringify = JSON.stringify(products);
console.log(prodectStringify)