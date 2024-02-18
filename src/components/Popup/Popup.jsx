import React from 'react';
import {Button, Checkbox, Dropdown, Input, MenuProps, Space} from 'antd';
// import TextArea from 'antd/es/input/TextArea';
// import type { CheckboxChangeEvent } from 'antd/es/checkbox';

// const handleChange = (value) => {
//     console.log(`selected ${value}`);
// };

// const onChange = (e: CheckboxChangeEvent) => {
//   console.log(`checked = ${e.target.checked}`);
// };

const Popup = () => {
    return (
        <Popup className="modal-teaser">
            <h1>Feedback</h1>
            <div className="modal-teaser-content">
                <div className="modal-input-wrapper modal-input-wrapper__default">
                    <p>default</p>
                    <Input className="modal-teaser-content__input" placeholder="Placeholder"/>
                </div>
                <div className="modal-input-wrapper modal-input-wrapper__name">
                    <p>Your name</p>
                    <Input className="modal-teaser-content__input" placeholder="Placeholder"/>
                </div>
                <div className="modal-input-wrapper modal-input-wrapper__mail">
                    <p>Email address</p>
                    <Input className="modal-teaser-content__input" placeholder="Placeholder"/>
                </div>
                <div className="modal-input-wrapper modal-input-wrapper__phone">
                    <p>Your phone</p>
                    <Input className="modal-teaser-content__input" placeholder="Placeholder"/>
                </div>
                <div className="modal-input-wrapper modal-input-wrapper__choose">
                    <p>Choose a trip</p>
                    {/*<Select*/}
                    {/*    className="input-select"*/}
                    {/*    placeholder="Choose"*/}
                    {/*    style={{borderRadius: 0}}*/}
                    {/*    onChange={handleChange}*/}
                    {/*    options={[*/}
                    {/*        {value: 'Walking in Old Tallinn', label: 'Walking in Old Tallinn'},*/}
                    {/*        {value: 'St. Isaac\'s Cathedral', label: 'St. Isaac\'s Cathedral'},*/}
                    {/*        {value: 'The Bridge of Peace', label: 'The Bridge of Peace'},*/}
                    {/*        {value: 'El Caminito del Rey', label: 'El Caminito del Rey'},*/}
                    {/*    ]}*/}
                    {/*/>*/}
                </div>
                <div className="modal-teaser-content__buttons">
                    <Button className="modal-button" type="primary">Reviews and suggestions</Button>
                    <Button className="modal-button-default modal-button-default__question" type="primary">Question about content</Button>
                    <Button className="modal-button-default modal-button-default__complaints" type="primary">Complaints</Button>
                    <Button className="modal-button-default modal-button-default__other" type="primary">Other</Button>
                </div>
                <p>Describe your question</p>
                <TextArea className="modal-teaser-content__textarea" placeholder="Placeholder" rows={4}/>
                <div className="modal-teaser-checkbox">
                    <label><input type="checkbox"/>Даю согласие на обработку</label>
                    <Button className="modal-button modal-button-default__send" type="primary">Send</Button>
                </div>
            </div>
        </Popup>
    );
}

export default Popup;
