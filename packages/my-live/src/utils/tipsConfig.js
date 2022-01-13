export const tipsConfig = (num) => {
    let index = 0;
    const TIPS = {
        0: '理想之城',
        1: '房思琪的初恋乐园',
        2: '小王子',
        3: '画家之眼',
        4: '演员自我修养',
        5: '人间词话',
        6: '追风筝的人',
        7: '欧亨利短篇小说精选',
        8: '安静的芦苇',
        9: '杀死一只知更鸟',
        10: '理想国'
    }
    if(num > 10) {
        index = 10;
    } else {
        index = num;
    }
    return TIPS[index];
}