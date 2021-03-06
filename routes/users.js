
const GROUP_NAME = 'users';

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            reply('shops')
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺列表'
        }
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{shopId}/goods`,
        handler: async (request, reply) => {
            reply();
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺商品列表'
        }
    }
]