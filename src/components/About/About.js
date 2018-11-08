import {h, Component} from 'preact';

import {AboutSection, AboutTitle, AboutParagraphs, ParagraphsItem, AboutMarker} from './styled';

const About = () => (
    <AboutSection>
        <AboutTitle>Разнообразие форматов отображения. Простота установки.</AboutTitle>
        <AboutParagraphs>
            <ParagraphsItem>
                <AboutMarker>1</AboutMarker>
                Скопируйте код виджета
            </ParagraphsItem>
            <ParagraphsItem>
                <AboutMarker>2</AboutMarker>
                Откройте HTML код вашей страницы для
                редактирования
            </ParagraphsItem>
            <ParagraphsItem>
                <AboutMarker>3</AboutMarker>
                Вставьте код виджета в необходимое место
                страницы
            </ParagraphsItem>
            <ParagraphsItem>
                <AboutMarker>4</AboutMarker>
                Сохраните HTML код страницы и обновите ее на
                сайте
            </ParagraphsItem>
        </AboutParagraphs>
    </AboutSection>
)

export default About;