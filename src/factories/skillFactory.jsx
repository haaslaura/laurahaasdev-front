/**
* 
* This function sorts skills icons according to their type: either <i> tags from fontawesome.com or images from the assets folder.
* @param {string} type - Type of media
* @param {string} source - The content of the data icon
* @returns Either an <i> tag or an <img> tag
*/

// Dynamic image import
const images = import.meta.glob("../assets/*", { eager: true });

export const skillFactory = (type, source) => {
    switch (type) {
        case "fontawesome":
        return {
            type,
            source,
            render: () => <i className={source} aria-hidden="true"></i>
        };
        
        case "svg":
        return {
            type,
            source,
            render: () => {
                const imgSrc = images[`../assets/${source}`]?.default;                
                return imgSrc ? <img src={imgSrc} alt="" /> : <span>Image non trouvée</span>;
            }
        };
        
        default:
        throw new Error("Type de média non supporté");
    }
};