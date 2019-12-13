//useful fuctions for all components
function clearMarvelText(txt) {
    const newTxt = txt == null || undefined ? 'This comic is SO AWESOME we do not want to Spoil it for you!!' : txt.replace(/\r<br>/g, '');
    return newTxt;
}

export default clearMarvelText;
