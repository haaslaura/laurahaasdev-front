import "./pageTitle.css"

/* Choose between dark-h1 or clear-h1
*/
const PageTitle = ({ text, classColorName }) => {

    return (
        <h2 className={classColorName}>{text}</h2>
    )
}

export default PageTitle