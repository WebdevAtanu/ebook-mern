import jwt from 'jsonwebtoken';
export const setCookie = (jwt_secret, admin_data, res) => {
    let token = jwt.sign({
        id: admin_data._id
    }, jwt_secret);
    res.status(201).cookie('admin_token', token, {
            httpOnly: true,
            maxAge: 30 * 60 * 1000,
            sameSite: 'none',
            secure: true
        })
        .json({
            status: true,
            message: `admin ${admin_data.name} logged in`
        })
}