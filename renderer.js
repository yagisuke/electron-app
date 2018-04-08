document.addEventListener('DOMContentLoaded', () => {
    // formのsubmit時の動作を定義する
    document.getElementById('comment-form').onsubmit = () => {
        const commentInput = document.getElementById('comment-input')
        const commentText = commentInput.value

        if (!commentText) return false

        const newComment = document.createElement('li')
        newComment.innerText = commentText

        const parentElement = document.getElementById('comments')
        const firstComment = parentElement.firstChild
        parentElement.insertBefore(newComment, firstComment)

        commentInput.value = ''
        return false
    }
})