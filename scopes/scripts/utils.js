function step(message, showConfirmation) {
  console.log(message);
  if (showConfirmation) {
    if (!confirm(`Pressione 'OK' para prosseguir`)) {
      throw new Error("FIM");
    }
  }
}
