import Header from './components/Header';
import externalContents from './externalContents.json'
import Section from "./components/Section";

function App() {
    return (
        <div>
            <Header
                title1={externalContents.title1}
                title2={externalContents.title2}
                subtitle={externalContents.subtitle}
            />
            <main>
                {externalContents.contents.map(content => {
                    return (
                        <Section
                            title={content.title}
                            products={content.products}
                        />
                    )
                })}
            </main>
        </div>
    )
}

export default App
