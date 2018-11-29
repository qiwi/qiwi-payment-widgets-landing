import {h, Component} from 'preact';

import {AboutSection, AboutTitle, AboutParagraphList, AboutParagraphListItem, AboutMarker} from './styled';

const About = () => (
    <AboutSection>
        <AboutTitle>Разнообразие форматов отображения. Простота установки.</AboutTitle>
        <AboutParagraphList>
            <AboutParagraphListItem>
                <AboutMarker>1</AboutMarker>
                Скопируйте код виджета
            </AboutParagraphListItem>
            <AboutParagraphListItem>
                <AboutMarker>2</AboutMarker>
                Откройте HTML код вашей страницы для
                редактирования
            </AboutParagraphListItem>
            <AboutParagraphListItem>
                <AboutMarker>3</AboutMarker>
                Вставьте код виджета в необходимое место
                страницы
            </AboutParagraphListItem>
            <AboutParagraphListItem>
                <AboutMarker>4</AboutMarker>
                Сохраните HTML код страницы и обновите ее на
                сайте
            </AboutParagraphListItem>
        </AboutParagraphList>
    </AboutSection>
)

export default About;