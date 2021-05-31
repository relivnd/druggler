export { speak } ;

const dealer = mouthState => `
    <svg class="dealer" viewBox="0 0 491 462" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>dealer</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard" transform="translate(-4.000000, -25.000000)">
                    <g id="dealer" transform="translate(4.739687, 25.000000)">
                        <path d="M125.260313,140 C121.92698,109.333333 125.593647,82 136.260313,58 C136.260313,58 139.593647,58 146.260313,58 C160.260313,19.3333333 193.260313,0 245.260313,0 C297.260313,0 330.260313,19.3333333 344.260313,58 L352.260313,58 C364.92698,90 368.260313,117 362.260313,139 C361.932135,139.656358 360.598801,139.989691 358.260313,140 C352.161834,151.595436 347.495167,163.262102 344.260313,175 C348.260313,215.666667 340.593647,246.666667 321.260313,268 C407.260313,312.666667 450.260313,335 450.260313,335 C477.394568,366.711117 490.394568,409.04445 489.260313,462 L0.26031343,462 C-1.98948189,408.789921 10.3438514,366.456588 37.2603134,335 C37.2603134,335 81.2603134,312.666667 169.260313,268 C148.593647,244.666667 140.260313,213.666667 144.260313,175 C144.260313,175 139.260313,163.333333 129.260313,140 L125.260313,140 Z" id="background" fill="#000000"></path>
                        <polygon id="skin" fill="#FFCC9A" points="144.260313 158 144.260313 188 169.260313 268 245.260313 304 321.260313 268 345.260313 188 345.260313 158"></polygon>
                        <path d="M145.260313,138 L145.260313,157 C177.92698,173 198.260313,181 206.260313,181 C226.390076,182.423317 239.260313,164 244.260313,164 C249.260313,164 263.260313,181 283.260313,181 C299.92698,177.666667 320.260313,169.666667 344.260313,157 L344.260313,138 C311.584216,134 278.584216,132 245.260313,132 C211.936411,132 178.603077,134 145.260313,138 Z" id="mask" fill="#215256"></path>
                        <path d="M308.260313,158 C308.260313,163.392143 296.094342,168.143492 286.260313,167 C274.594342,165.643492 265.260313,159.632441 265.260313,153 C265.260313,144 276.689756,140.887145 286.260313,142 C297.260313,144 308.260313,150.892143 308.260313,158 Z" id="eye-r" fill="#FFCC9A" transform="translate(286.760313, 154.477672) scale(-1, 1) translate(-286.760313, -154.477672) "></path>
                        <path d="M224.260313,158 C224.260313,163.392143 212.094342,168.143492 202.260313,167 C190.594342,165.643492 181.260313,159.632441 181.260313,153 C181.260313,144 192.689756,140.887145 202.260313,142 C213.260313,144 224.260313,150.892143 224.260313,158 Z" id="eye-l" fill="#FFCC9A"></path>
                        <path d="M143.260313,187 C151.260313,212.333333 162.92698,228.333333 178.260313,235 C193.260313,239 204.885504,224.895086 224.260313,222 C243.635123,219.104914 242.179554,217.878436 265.260313,222 C288.341073,226.121564 292.260313,237 308.260313,237 C322.260313,235.666667 334.260313,219 344.260313,187 C346.92698,223.666667 339.08242,250.631508 320.726632,267.894523 C299.400123,291.36546 278.905989,305 245.260313,305 C211.818251,305 186.453316,292.780755 169.16551,268.342266 C150.562045,247.447422 141.92698,220.333333 143.260313,187 Z" id="beard" fill="#7F4737"></path>
                        <path d="M244.260313,238 C261.642444,238 279.01544,246.184556 279.260313,255 C279.51544,264.184556 262.392071,274 245.260313,274 C227.892071,274 210.519066,264.315084 210.260313,255 C210.019066,246.315084 227.142444,238 244.260313,238 Z" id="Mouth" fill="#FFCC9A"></path>
                        <polygon id="hair-l" fill="#7F4737" points="129.260313 140 145.260313 138 144.260313 175"></polygon>
                        <polygon id="hair-r" fill="#7F4737" points="344.260313 138 358.260313 140 344.260313 175"></polygon>
                        <g id="mouth" transform="translate(218.260313, 242.000000)" fill="#000000">
                            <ellipse id="mouth" cx="${mouthState.cx}" cy="${mouthState.cy}" rx="${mouthState.rx}" ry="${mouthState.ry}"></ellipse>
                        </g>
                        <g id="eye-left" transform="translate(193.260313, 146.000000)">
                            <circle id="eye-open" fill="#000000" cx="8.5" cy="8.5" r="8.5"></circle>
                            <ellipse id="eye-closed" fill="#000000" cx="8.5" cy="8.5" rx="8.5" ry="4.5"></ellipse>
                            <circle id="eye-dot" fill="#FFFFFF" cx="10.5" cy="12.5" r="1.5"></circle>
                        </g>
                        <g id="eye-right" transform="translate(280.260313, 146.000000)">
                            <circle id="eye-open" fill="#000000" cx="8.5" cy="8.5" r="8.5"></circle>
                            <ellipse id="eye-closed" fill="#000000" cx="8.5" cy="8.5" rx="8.5" ry="4.5"></ellipse>
                            <circle id="eye-dot" fill="#FFFFFF" cx="11.5" cy="12.5" r="1.5"></circle>
                        </g>
                        <polygon id="armpit-left" fill="#272727" points="119.260313 378 129.260313 462 109.260313 462"></polygon>
                        <polygon id="armpit-right" fill="#272727" points="372.260313 378 382.260313 462 362.260313 462"></polygon>
                        </g>
                </g>
            </g>
        </svg>
    `;

const drawDealer = mouthState => document.getElementById("dealerContainer").innerHTML = dealer(mouthState);

let i = 0;
let speed = 50;

let mouthOpen = {
    cx:26,
    cy:14,
    rx:26,
    ry:14
}

let mouthClose = {
    cx:26,
    cy:13.5,
    rx:26,
    ry:8.5
}


const speak = t => {
    let text = t;
    let IntervalID = setInterval(typewriter, 50);
    document.getElementById("textBubble").innerHTML="";
    function typewriter() {
        document.getElementById("textBubble").innerHTML += text.charAt(i);
        drawDealer(i % 2 !== 0 ? mouthOpen : mouthClose);
        if (i >= text.length){
            clearInterval(IntervalID);
            i = 0;
        } else {
            i++;
        }
    }
}
