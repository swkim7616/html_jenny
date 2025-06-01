// script.js

document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("macbookOrderForm");

  orderForm.addEventListener("submit", (event) => {
    event.preventDefault(); // 폼 기본 제출 동작 방지

    const macbookModel = document.getElementById("macbookModel").value;
    const macbookPrice =
      parseFloat(document.getElementById("macbookPrice").value) * 10000; // 만원 단위를 원으로 변환
    const quantity = parseInt(document.getElementById("quantity").value);

    if (
      !macbookModel ||
      isNaN(macbookPrice) ||
      isNaN(quantity) ||
      quantity <= 0
    ) {
      alert("모든 필드를 올바르게 입력해주세요.");
      return;
    }

    const totalPrice = macbookPrice * quantity;

    const confirmMessage = `다음 ${macbookModel} 모델을 ${quantity}개 주문하셨습니다.\n총 금액은 ${totalPrice.toLocaleString()}원 입니다.\n주문하시겠습니까?`;

    if (confirm(confirmMessage)) {
      alert("주문해주셔서 감사합니다!");
      // 실제 주문 처리 로직 (서버 전송 등)은 여기에 추가
      orderForm.reset(); // 폼 초기화
    } else {
      alert("주문이 취소되었습니다.");
    }
  });
});
