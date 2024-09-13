import { isNotMobileDevice, getRandomArbitrary } from '@/utils';

let maxStars = isNotMobileDevice() ? 75 : 35;

let minTop = isNotMobileDevice() ? 1 : 1;
let maxTop = isNotMobileDevice() ? 100 : 70;

let minLeft = isNotMobileDevice() ? -60 : -20;
let maxLeft = isNotMobileDevice() ? 80 : 110;

function setProperty(left: number, top: number, animationDelay: number, div: HTMLDivElement) {
    div.style.left = `${left}%`;
    div.style.top = `${top}%`;
    div.style.animationDelay = `${animationDelay}ms`;
}

export const backgroundStars = () => {
    const nightDiv = document.getElementById('night');

    for (let index = 0; index < maxStars; index++) {
        const animationDelay = getRandomArbitrary(100, 3500);
        const randomNumberTop = getRandomArbitrary(minTop, maxTop);
        const randomNumberLeft = getRandomArbitrary(minLeft, maxLeft);

        const shootingStarDiv = document.createElement('div');
        shootingStarDiv.classList.add('shooting_star');

        function changeAnimationTime() {
            setProperty(randomNumberLeft, randomNumberTop, animationDelay, shootingStarDiv);
        }
        changeAnimationTime();
        nightDiv?.appendChild(shootingStarDiv);
    }
};
