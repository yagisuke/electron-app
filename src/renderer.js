document.addEventListener('DOMContentLoaded', () => {
    // formのsubmit時の動作を定義する
    document.getElementById('comment-form').onsubmit = () => {
        const $commentInput = document.getElementById('comment-input')
        const inputVal = $commentInput.value

        if (!inputVal) return false

        const $newComment = document.createElement('li')
        $newComment.innerText = inputVal

        const $commentBox = document.getElementById('comments')
        const $firstComment = $commentBox.firstChild
        $commentBox.insertBefore($newComment, $firstComment)

        $commentInput.value = ''
        return false
    }
})