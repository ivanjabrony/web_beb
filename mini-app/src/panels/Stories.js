import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";

export const Stories = async () => {
    var url_request = 'https://randomfox.ca/floof';
    
    const response = await fetch(url_request)
        .then(res => res.json()
        );
    var url_img = response.image;
    //alert(url_img);
    return (
        bridge.send('VKWebAppShowStoryBox', {
            background_type: 'image',
            url: url_img,
            attachment: {
                text: 'book',
                type: 'photo',
                owner_id: 743784474,
                id: 12345678
            }
        })
            .then((data) => {
                if (data.code_data) {
                    // Редактор историй открыт
                    console.log(data);
                }
            })
            .catch((error) => {
                // Ошибка
                console.log(error);
            })
    );
};

Stories.propTypes = {
    id: PropTypes.string.isRequired,
};
