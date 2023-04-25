export const isCorrectLength = (str, maxLength) => str.length <= maxLength;
export function getRandomInt(from, to) {
  if (from < 0 || to < 0) {
    throw new RangeError('Числа в диапазоне должны быть положительными');
  }
  if (from === to) {
    return from;
  }
  if (from > to) {
    [from, to] = [to, from];
  }
  return Math.round(Math.random() * (to - from) + from);
}
export function getCloseListeners(modal, closeButton, callback){
  const closeOnEscape = (ev) => ev.key === 'Escape' && closeModal();
  function closeModal(){
    if (callback){
      callback();
    }
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeOnEscape);
    closeButton.removeEventListener('click', closeModal);
  }
  return [closeModal, closeOnEscape];
}
export function trimField(field) {
  field.value = field.value.trimEnd();
}

export function transformFromHundredProcent(value, max, min, fixed) {
  return ((value / 100) * (max - min) + min).toFixed(fixed);
}
