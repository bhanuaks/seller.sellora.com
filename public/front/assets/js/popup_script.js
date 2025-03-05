export function showNotification(message){
    let popupElement = document.createElement('div');
    popupElement.classList.add('popup'); 
    let textElement = document.createElement('div');  
    textElement.classList.add('popup-text');
    textElement.innerHTML = message;  
    popupElement.append(textElement); 
    document.body.append(popupElement);


    // setTimeout(() => {
    //     popupElement.remove()
    // }, 3000);
}
 