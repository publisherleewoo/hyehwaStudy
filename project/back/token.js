const jwt = require('jsonwebtoken');
// Generate an Access Token for the given User ID
function generateAccessToken(userId) {
    const token = jwt.sign({}, process.env.JWT_SECRET, {
        expiresIn: '7d',
        audience: 'public',
        issuer: 'hyehwa',
        subject: userId.toString()
    });
    return token;
}

module.exports = {
    generateAccessToken: generateAccessToken
}
