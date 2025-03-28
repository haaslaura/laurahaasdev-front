import "./pageTitle.css"

/* Choose between dark-h2 or clear-h2
*/
const PageTitle = ({ text, classColorName }) => {

    return (
        <h2 className={classColorName}>{text}</h2>
    )
}

export default PageTitle