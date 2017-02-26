/**
 * 20170226002146-add-video-id-to-study-sessions
 * get-native.com
 *
 * Created by henryehly on 2017/02/26.
 */

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.addColumn('study_sessions', 'video_id', {
            type: Sequelize.INTEGER,
            references: {
                model: 'videos',
                key: 'id'
            },
            onUpdate: 'restrict',
            onDelete: 'restrict'
        });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.removeColumn('study_sessions', 'video_id');
    }
};
