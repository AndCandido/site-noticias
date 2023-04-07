const form = document.querySelector('.form-add-news')

const getValueField = (name) => document.querySelector(`[name=${name}]`).value

function getError() {
    if(!getValueField('news')) {
        return 'O campo "Notícia" deve ser preenchido corretamente'
    }
    if(!getValueField('category')) {
        return 'O campo "Categoria" deve ser preenchido corretamente'
    }
    if(!getValueField('content')) {
        return 'O campo "Conteúdo" deve ser preenchido corretamente'
    }

    if(getValueField('news').length > 70) {
        return 'Notícia deve conter no máximo 70 caractéres'
    }
    if(getValueField('category').length > 30) {
        return 'Categoria deve conter no máximo 30 caractéres'
    }
    if(getValueField('content').length > 70) {
        return 'Conteúdo deve conter no máximo 800 caractéres'
    }
    return false
}

function showError(error) {
    document.querySelectorAll('.div-error').forEach(e => e.remove())
    const divError = document.createElement('div')
    divError.className = 'div-error'    
    divError.innerText = error
    form.insertAdjacentElement('beforebegin', divError)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const error = getError()
    console.log(error)
    error && showError(error)
    !error && e.target.submit()
})