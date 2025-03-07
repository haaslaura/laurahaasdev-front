import "./pageTitle.css"

const PageTitle = ({ text, classColorName }) => {

    return (
        <h1 className={classColorName}>{text}</h1>
    )
}

export default PageTitle