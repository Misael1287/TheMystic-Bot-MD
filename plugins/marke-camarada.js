let handler = async (m, { conn, usedprefix, text }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/comrade', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '*¡¡𝚂𝚊𝚕𝚟𝚎 𝙷𝚒𝚝𝚕𝚎𝚛!!*', m)
}
handler.help = ['pixel','difuminar']
handler.tags = ['maker']
handler.command = /^(camarada|nazi)$/i
export default handler
