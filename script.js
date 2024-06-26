const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closemodalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");
const addressWarnOrder = document.getElementById("address-warn-order");
const addressWarnname = document.getElementById("address-warn-name");
const nomeinput = document.getElementById("nomeinput");
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  const menuBurguer = document.getElementById("menu-burguers");
  // usar id especifica para burgues cria  uma div

  const Burguers = [
    {
      id: 1,
      name: "Gourmet Texas",
      description:
        "Pão brioche, hambúrguer de costela 170g, carne seca, catupiry, alface americana, pepino japonês, tomate, molho americano e fritas.",
      price: 41.0,
      category: "burger",
    },
    {
      id: 2,
      name: "Gourmet Costela Caprese",
      description:
        "Pão brioche, hambúrguer costela 170g, bacon, tomate seco, rúcula, creme pesto, queijo golda e fritas.",
      price: 40.0,
      category: "burger",
    },
    {
      id: 3,
      name: "Gourmet Frango",
      description:
        "Pão brioche, ﬁlé de frango empanado, alface americana, tomate, pepino, anel de cebola, mussarela, molho de creme catupiry e fritas.",
      price: 39.0,
      category: "burger",
    },
    {
      id: 4,
      name: "Especial Picanha",
      description:
        "Fatias de picanha com pão brioche, alface, tomate, pepino, fritas e queijo.",
      price: 43.0,
      category: "burger",
    },
    {
      id: 5,
      name: "Especial Frango",
      description:
        "Pão brioche, ﬁlé de frango, coração, queijo, milho, alface, tomate e fritas.",
      price: 41.0,
      category: "burger",
    },
    {
      id: 6,
      name: "X Especial Misto",
      description:
        "Pão brioche, hambúrguer, coração, bife, bacon, frango, ovos, calabresa, queijo, alface, tomate, milho, pepino e fritas.",
      price: 48.0,
      category: "burger",
    },
    {
      id: 7,
      name: "Hamburguer",
      description: "Pão, hambúrguer",
      price: 9.0,
      category: "burger",
    },
    {
      id: 8,
      name: "Misto Quente",
      description: "Pão, queijo e presunto em dobro.",
      price: 11.0,
      category: "burger",
    },
    {
      id: 9,
      name: "X Burguer",
      description: "Pão, hambúrguer, queijo e presunto.",
      price: 12.0,
      category: "burger",
    },
    {
      id: 10,
      name: "Misto Burguer",
      description: "Pão, hambúrguer, queijo e presunto em dobro.",
      price: 16.0,
      category: "burger",
    },
    {
      id: 11,
      name: "X Salada",
      description:
        "Pão, hambúrguer, queijo, presunto, alface, tomate, pepino, milho, ervilha e batata palha.",
      price: 17.0,
      category: "burger",
    },
    {
      id: 12,
      name: "Misto Galinha",
      description: "Pão, ﬁlé de frango, queijo e presunto em dobro.",
      price: 20.0,
      category: "burger",
    },
    {
      id: 13,
      name: "X Galinha",
      description:
        "Pão, ﬁlé de frango, queijo, presunto, alface, tomate, pepino, milho, ervilha e batata palha.",
      price: 20.0,
      category: "burger",
    },
    {
      id: 14,
      name: "X Egg",
      description:
        "Pão, hambúrguer, ovo, queijo, presunto, alface, tomate, pepino, milho, ervilha e batata palha.",
      price: 19.0,
      category: "burger",
    },
    {
      id: 15,
      name: "X Bacon",
      description:
        "Pão, hambúrguer, bacon, queijo, presunto, alface, tomate, pepino, milho, ervilha e batata palha.",
      price: 21.0,
      category: "burger",
    },
    {
      id: 16,
      name: "X Bife",
      description:
        "Pão, bife, queijo, presunto, alface, tomate, pepino, milho, ervilha e batata palha.",
      price: 26.0,
      category: "burger",
    },
    {
      id: 17,
      name: "X Coração",
      description:
        "Pão, coração, queijo, presunto, alface, tomate, pepino, milho, ervilha e batata palha.",
      price: 26.0,
      category: "burger",
    },
    {
      id: 18,
      name: "X Calabresa",
      description:
        "Pão, calabresa, queijo, presunto, alface, tomate, pepino, milho, ervilha e batata palha.",
      price: 20.0,
      category: "burger",
    },
    {
      id: 19,
      name: "Misto Bacon",
      description: "Pão, bacon, queijo e presunto em dobro.",
      price: 21.0,
      category: "burger",
    },
    {
      id: 20,
      name: "Misto Bife",
      description: "Pão, bife, queijo e presunto em dobro.",
      price: 26.0,
      category: "burger",
    },
    {
      id: 21,
      name: "Misto Coração",
      description: "Pão, coração, queijo e presunto em dobro.",
      price: 26.0,
      category: "burger",
    },
    {
      id: 22,
      name: "Misto Calabresa",
      description: "Pão, calabresa, queijo e presunto em dobro.",
      price: 20.0,
      category: "burger",
    },
  ];

  Burguers.forEach((burger) => {
    const burgerItem = document.createElement("div");
    burgerItem.className = "flex gap-2";

    burgerItem.innerHTML = `
  <div class="w-full">
    <img src="./assets/hamb-2.png" alt="${burger.name}"
      class="img-custom-size-burguer rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    <p class="font-bold">${burger.name}</p>
    <p class="text-sm">${burger.description}</p>
    <div class="flex items-center gap-2 justify-between mt-3">
      <p class="font-bold text-lg">R$ ${burger.price.toFixed(2)}</p>
      <button class="bg-gray-900 px-5 rounded add-to-cart-btn" data-name="${
        burger.name
      }" data-price="${burger.price}">
        <i class="fa fa-cart-plus text-2xl"></i>
      </button>
    </div>
  </div>
`;

    menuBurguer.appendChild(burgerItem);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBebidas = document.getElementById("menu-bebidas");
  const bebidas = [
    { id: 1, name: "Sucos - Laranja", price: 9.0, category: "drink" },
    { id: 2, name: "Sucos - Morango", price: 9.0, category: "drink" },
    { id: 3, name: "Sucos - Uva", price: 9.0, category: "drink" },
    { id: 4, name: "Sucos - Limão", price: 9.0, category: "drink" },
    { id: 5, name: "Sucos - Maracujá", price: 9.0, category: "drink" },
    { id: 6, name: "Sucos - Abacaxi", price: 9.0, category: "drink" },
    {
      id: 7,
      name: "Sucos - Com leite condensado",
      price: 12.0,
      category: "drink",
    },
    {
      id: 8,
      name: "Refrigerantes 350 ml - Coca-Cola",
      price: 8.5,
      category: "drink",
    },
    {
      id: 9,
      name: "Refrigerantes 350 ml - Fanta",
      price: 8.5,
      category: "drink",
    },
    {
      id: 10,
      name: "Refrigerantes 350 ml - Guaraná",
      price: 8.5,
      category: "drink",
    },
    {
      id: 11,
      name: "Refrigerantes 350 ml - Sprite",
      price: 8.5,
      category: "drink",
    },
    {
      id: 12,
      name: "Refrigerantes 350 ml - Tônica",
      price: 8.5,
      category: "drink",
    },
    {
      id: 13,
      name: "Refrigerantes 350 ml - Red Bull tradicional",
      price: 15.0,
      category: "drink",
    },
    {
      id: 14,
      name: "Refrigerantes 350 ml - Red Bull Tropical",
      price: 15.0,
      category: "drink",
    },
    {
      id: 15,
      name: "Refrigerantes 2L - Coca-Cola",
      price: 17.0,
      category: "drink",
    },
    {
      id: 16,
      name: "Refrigerantes 2L - Fanta",
      price: 17.0,
      category: "drink",
    },
    {
      id: 17,
      name: "Refrigerantes 2L - Guaraná",
      price: 17.0,
      category: "drink",
    },
    { id: 18, name: "Água - Com gás", price: 6.0, category: "drink" },
    { id: 19, name: "Água - Sem gás", price: 6.0, category: "drink" },
    {
      id: 20,
      name: "Cerveja 600ML - Heineken",
      price: 17.0,
      category: "drink",
    },
    {
      id: 21,
      name: "Cerveja 600ML - Original",
      price: 16.0,
      category: "drink",
    },
    {
      id: 22,
      name: "Cerveja 600ML - Einsenbahn",
      price: 16.0,
      category: "drink",
    },
    { id: 23, name: "Cerveja 600ML - Skol", price: 15.0, category: "drink" },
    { id: 24, name: "Cerveja 600ML - Amstel", price: 16.0, category: "drink" },
    {
      id: 25,
      name: "Cerveja 600ML - LONG NECK",
      price: 10.0,
      category: "drink",
    },
  ];

  bebidas.forEach((bebidas) => {
    const bebidaItem = document.createElement("div");
    bebidaItem.className = "flex gap-2";

    bebidaItem.innerHTML = `
  <div class="w-full">
    <img src="./assets/refri-8.png" alt="${bebidas.name}"
      class="img-custom-size rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    <div class="w-full">
      <p class="font-bold">${bebidas.name}</p>
      <div class="flex items-center gap-2 justify-between mt-3">
        <p class="font-bold text-lg">R$ ${bebidas.price.toFixed(2)}</p>
        <button class="bg-gray-900 px-5 rounded add-to-cart-btn" data-name="${
          bebidas.name
        }" data-price="${bebidas.price}">
          <i class="fa fa-cart-plus text-2xl"></i>
        </button>
      </div>
    </div>
  </div> 
`;
    menuBebidas.appendChild(bebidaItem);
  });
});

// abrir carrinho
cartBtn.addEventListener("click", function () {
  updatecartmodal();
  cartModal.style.display = "flex";
});

// fechar carrinho
cartModal.addEventListener("click", function (event) {
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  }
});

closemodalBtn.addEventListener("click", function () {
  cartModal.style.display = "none";
});

menu.addEventListener("click", function (event) {
  let parentbutton = event.target.closest(".add-to-cart-btn");

  if (parentbutton) {
    const name = parentbutton.getAttribute("data-name");
    const price = parseFloat(parentbutton.getAttribute("data-price"));
    addtocart(name, price);
  }
});

// funcao para adicionar no carrinho
function addtocart(name, price) {
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    // se o item ja existe a quantidade aumenta +1
    existingItem.quantity += 1;
  } else {
    cart.push({
      name,
      price,
      quantity: 1,
    });
  }

  updatecartmodal();
}

function updatecartmodal() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add(
      "flex",
      "justify-between",
      "mb-4",
      "flex-col"
    );

    cartItemElement.innerHTML = `
    <div class="flex items-center justify-between mb-2">
      <div>
        <p class="font-medium">${item.name}</p>
        <p>Quantidade: ${item.quantity}</p>
        <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
      </div>
      <button class="remove-from-cart-btn" data-name="${item.name}">
        Remover
      </button>
    </div>
    `;

    total += item.price * item.quantity;

    cartItemsContainer.appendChild(cartItemElement);
  });

  cartTotal.textContent = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  cartCounter.innerHTML = cart.length;
}

// funcao para remover item do carrinho
cartItemsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    const name = event.target.getAttribute("data-name");

    removeItemCart(name);
  }
});

function removeItemCart(name) {
  const index = cart.findIndex((item) => item.name === name);

  if (index !== -1) {
    const item = cart[index];

    if (item.quantity > 1) {
      item.quantity -= 1;
      updatecartmodal();
      return;
    }
    cart.splice(index, 1);
    updatecartmodal();
  }
}

addressInput.addEventListener("input", function (event) {
  let inputvalue = event.target.value;

  if (inputvalue !== "") {
    addressWarn.classList.add("hidden");
  }
});

nomeinput.addEventListener("input", function (event) {
  let inputvalue = event.target.value;

  if (inputvalue !== "") {
    addressWarnname.classList.add("hidden");
  }
});

cartTotal.addEventListener("click", function (event) {
  let inputvalue = event.target.value;

  if (inputvalue !== 0.0 || null || "" || undefined) {
    addressWarnOrder.classList.add("hidden");
  }
});

checkoutBtn.addEventListener("click", function () {
  const isOpen = checkrestauranteopen();

  if (!isOpen) {
    Toastify({
      text: "O restaurante está fechado no momento!",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#ef4444",
      },
    }).showToast();
    return;
  }

  if (cart.length === 0) {
    addressWarnOrder.classList.remove("hidden");
    return;
  }

  if (addressInput.value === "") {
    addressWarn.classList.remove("hidden");
    addressInput.classList.add("border-red-500");
    return;
  }

  if (nomeinput.value === "") {
    addressWarnname.classList.remove("hidden");
    nomeinput.classList.add("border-red-500");
    return;
  }

  const payment = document.getElementById("payment");
  const neighborhood = document.getElementById("neighborhood");

  const cartItems = cart
    .map((item) => {
      return `
      - ${item.name}
        Preço: R$${item.price.toFixed(2)}
        Qtd: ${item.quantity}
       `;
    })
    .join("");

  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  const ordercart = `
    *Pedido de Cliente:*
    Nome: ${nomeinput.value}
    Forma de Pagamento: ${payment.value}
    Endereço: ${addressInput.value}, ${neighborhood.value}
    
    *Itens do Carrinho:*
    ${cartItems}

    *Total:*
    R$${total.toFixed(2)}

    *Obrigado por seu pedido! Entraremos em contato em breve para confirmar os detalhes.*
    `;

  const encodedMessage = encodeURIComponent(ordercart);

  const phone = "47996855882";
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");

  cart = [];
  updatecartmodal();
});

function checkrestauranteopen() {
  const data = new Date();
  const hours = data.getHours();
  return hours >= 12 && hours < 24;
}

const spanItem = document.getElementById("data-span");
const isOpen = checkrestauranteopen();

if (spanItem) {
  if (isOpen) {
    spanItem.classList.remove("bg-red-700");
    spanItem.classList.add("bg-green-600");
  } else {
    spanItem.classList.remove("bg-green-600");
    spanItem.classList.add("bg-red-700");
  }
}
