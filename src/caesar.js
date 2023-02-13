function mod(n, p)
{
    if ( n < 0 )
        n = p - Math.abs(n) % p;

    return n % p;
}

function caesarCipher(msg, key) {
    var encMsg = "";

    for(var i = 0; i < msg.length; i++)
    {
        var code = msg.charCodeAt(i);

        // Encrypt only letters in 'A' ... 'Z' interval
        if (code >= 65 && code <= 65 + 26 - 1)
        {
            code -= 65;
            code = mod(code + key, 26);
            code += 65;
        }
        if (code >= 97 && code <= 97 + 26 - 1) {
            code -= 97
            code = mod(code + key, 26)
            code += 97
        }

        encMsg += String.fromCharCode(code);
    }

    return encMsg;
}

module.exports = caesarCipher