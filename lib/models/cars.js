module.exports = (sequelize, DataTypes) => {
    const cars = sequelize.define(
        'cars',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: DataTypes.STRING,
                allowNull: false
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isIn: [['sedan', 'suv', 'hatchback']]
                }
            },
            status: {
                type: DataTypes.STRING,
                defaultValue: 'open',
                validate: {
                    isIn: [['open', 'inTransit', 'offline']]
                }
            },
            location: {
                type: DataTypes.GEOMETRY('POINT', 4326),
                allowNull: false
            },
            registrationNo: {
                field: 'registration_no',
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                // We require names to have length of at least 2, and
                // only use letters, numbers and underscores.
                is: /^\w{2,}$/
            },
            userId: {
                field: 'user_id',
                type: DataTypes.INTEGER,
                allowNull: false,
                index: true,
                references: {
                    model: { tableName: 'users' },
                    key: 'id'
                }
            }
        },
        {
            sequelize,
            tableName: 'cars',
            timestamps: true
        }
    );

    return cars;
};
