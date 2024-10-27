function redirectToWhatsApp() {
    const phoneNumber = "2932444386";
    const message = "¡Hola! Me interesa hacer un pedido.";
    const url = `https://wa.me/549${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
}
