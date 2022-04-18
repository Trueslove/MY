const message = {

    success(params) {
        if (typeof params === 'string') params = { content: params };

        uni.showToast({
            title: params.content || '操作成功~',
            icon: 'success',
            duration: params.duration || 1500,
            success: params.resolve
        })
        return true
    },

    error(params) {
        if (typeof params === 'string') params = { content: params };
        uni.showToast({
            title: params.content,
            icon: 'error',
            duration: params.duration || 1500,
            success: params.resolve
        })
        return true
    },

    info(params) {
        if (typeof params === 'string') params = { content: params };
        uni.showToast({
            title: params.content || '支付失败',
            icon: 'none',
            // position: 'bottom',
            duration: params.duration || 1500,
            success: params.resolve
        })
        return true
    },

    tips(params) {
        if (typeof params === 'string') params = { content: params };
        uni.showToast({
            title: params.content || '支付失败',
            icon: 'none',
            // position: 'bottom',
            duration: params.duration || 1500,
            success: params.resolve
        })
        return true
    }
}

export {
    message
};