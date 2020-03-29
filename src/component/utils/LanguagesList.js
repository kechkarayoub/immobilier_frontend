import franceFlag from '../images/flags/France.png';
import marocFlag from '../images/flags/Morocco.png';
import React from 'react';
import store from 'store';
import unitedStatesFlag from '../images/flags/UnitedStates.png';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './LanguagesList.css';


const LanguagesList = (props) => (
    <div className="languages_dropdown">
        <DropdownButton
            title={store.get("current_langue") === "fr" ?
                props.t('header.languages.french')
            :
                props.t(store.get("current_langue") === "en" ? 'header.languages.english' : 'header.languages.arabic')
            }
            className="list_languages"
            data-testid="languages_button"
        >
            {/*<Dropdown.Item active={store.get("current_langue") === "ar"} onClick={() => props.on_click("ar")}>
                <img src={marocFlag} alt={props.t('header.languages.arabic')}/><span>{ props.t('header.languages.arabic') }</span>
            </Dropdown.Item>*/}
            <Dropdown.Item active={store.get("current_langue") === "en"} onClick={() => props.on_click("en")}>
                <img src={unitedStatesFlag} alt={props.t('header.languages.english')}/><span>{ props.t('header.languages.english') }</span>
            </Dropdown.Item>
            <Dropdown.Item active={store.get("current_langue") === "fr"} onClick={() => props.on_click("fr")}>
                <img src={franceFlag} alt={props.t('header.languages.french')}/><span>{ props.t('header.languages.french') }</span>
            </Dropdown.Item>            
        </DropdownButton>
    </div>
)

export default LanguagesList;
