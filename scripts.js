const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

fetch('https://picsum.photos/v2/list?page=2&limit=3')
    .then(response => response.json())
    .then(data => {
            data.forEach(element => {
                let wrapper = document.createElement('div');
                wrapper.className = 'swiper-slide';
                let image = document.createElement('img');
                image.src = element.download_url;
                document.querySelector('.swiper-wrapper')
                    .appendChild(wrapper)
                    .appendChild(image);
            });
        }
    )
    .catch(error => console.log(error));


document.querySelector('.post-button').addEventListener('click', function () {
    let comment = document.querySelector('.comment-input');
    if (comment.value !== '') {
        let commentSection = document.querySelector('.comments-section');
        let commentWrapperElement = document.createElement('div');
        let commentUserName = document.createElement('span');
        let commentElement = document.createElement('span');
        commentWrapperElement.className = 'comment-wrapper';
        commentUserName.className = 'user-label';
        commentUserName.innerHTML = 'Comment ';
        commentElement.className = 'user-comment';
        commentElement.innerHTML = comment.value;
        commentSection.appendChild(commentWrapperElement).appendChild(commentUserName);
        commentSection.appendChild(commentWrapperElement).appendChild(commentElement);
        commentSection.scrollTop = commentSection.scrollHeight;
        comment.value = '';
    }
});


document.getElementById('svg-like-button').addEventListener('click', function () {
    this.classList.toggle('heartbeat');

});