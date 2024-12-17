const menu = [
    {name:"Magherita", price:10},
    {name:"Pepper", price:8},
    {name:"Sea Food", price:15},
    {name:"Veggie", price:6},
]

const cashInRegister = 100
const orderQueue = []
const orderId = 1

function AddNewPizza(pizza){
    menu.push(pizza)
}

function PlaceOrder(pizzaName){
    for (pizza in menu){
        for(item of pizza){
            if (item.name === pizzaName){
                cashInRegister+= item.price
                const newOrder = {id:orderId, pizza: item, status: "ordered"}
                orderId+=1
                orderQueue.push(newOrder)
                return newOrder
            }
        }
    }
}

function completeOrder(orderId){
    //const order = orderQueue.find(order => order.id === orderId)
    //order.status = "complete"
    //return order
    for (order in orderQueue){
        for (item of order){
            if (item.id === orderId){
                item.status = "complete"
                const foundOrder = item
                return foundOrder
            }
        }
    }
}