const galleryContainer = document.querySelector('.gallery');
const galleryItems = document.querySelectorAll('.gallery-item');
const indicator = document.querySelector('.indicator');
const background = document.querySelector('.background');
const infoTitleDisplay = document.querySelector('.info').querySelector('h4');
const infoDisplay = document.querySelector('.info').querySelector('p');
const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');
const buttons = document.querySelector('.navigating-buttons').querySelectorAll('button');

const defaultItemFlex = window.innerWidth < 1400 ? '0 1 1vh': '0 1 2vw';
const hoverItemFlex = window.innerWidth < 1400 ? '1 1 15vh': '1 1 20vw';

const updateGalleryItems = () => {
    galleryItems.forEach(item => {
        let flex = defaultItemFlex;
        const infoTitle = item.querySelector('h4').innerText;
        const info = item.querySelector('p').innerText;
        let infoDisplayStyle = 'none';

        if (item.isHovered) {
            flex = hoverItemFlex;
            setTimeout(() => {
                if (item.isHovered) {
                    infoDisplayStyle = 'block';
                    const source = item.children[0].getAttribute("src");
                    background.style.backgroundImage = `url('${source}')`;
                    infoTitleDisplay.innerText = infoTitle;
                    infoDisplay.innerText = info;
                }
            }, 500);
        }
        
        item.style.flex = flex;
    });
}

galleryItems[0].isHovered = true;
updateGalleryItems();

galleryItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        galleryItems.forEach(otherItem => {
            otherItem.isHovered = otherItem === item;
        });

        updateGalleryItems();
    });
});

galleryContainer.addEventListener("mousemove", e => {
    indicator.style.left = `${e.clientX - galleryContainer.getBoundingClientRect().left}px`;
});


buttons.forEach(button => {
    let incrementor;
    if (button.classList.contains('btn-prev')) {
        incrementor = -1;
    }
    else {
        incrementor = 1;
    }

    button.addEventListener('click', () => {
        const galleryArray = [...galleryItems];
        const hoveredItem = galleryArray.find(item => item.isHovered);
        let hoveredItemIndex = galleryArray.indexOf(hoveredItem);

        if (incrementor === 1 && hoveredItemIndex === galleryArray.length - 1)
            hoveredItemIndex = -1;
        else if (incrementor === -1 && hoveredItemIndex === 0)
            hoveredItemIndex = 19;

        hoveredItem.isHovered = false;
        galleryArray[hoveredItemIndex + incrementor].isHovered = true;

        updateGalleryItems();
    });
});