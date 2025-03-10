import "./pageTitle.css"

/* Choose between dark-h1 or clear-h1
*/
const PageTitle = ({ text, classColorName }) => {

    return (
        <h1 className={classColorName}>{text}</h1>
    )
}

export default PageTitle