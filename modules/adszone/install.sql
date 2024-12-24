DROP TABLE IF EXISTS `__PREFIX__adszone_ads`;
CREATE TABLE `__PREFIX__adszone_ads`  (
    `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `zone_id` int(11) NOT NULL DEFAULT 0 COMMENT '广告位ID',
    `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '标题',
    `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '图片地址',
    `linkurl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '' COMMENT '链接地址',
    `target` enum('_self','_blank') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '_blank' COMMENT 'URL打开方式:_blank=新窗口打开,_self=当前窗口打开',
    `code` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '广告代码',
    `effectime` int(11) NOT NULL DEFAULT 0 COMMENT '生效时间',
    `expiretime` int(11) NOT NULL DEFAULT 0 COMMENT '到期时间',
    `weigh` int(10) NOT NULL DEFAULT 0 COMMENT '权重',
    `create_time` int(10) NOT NULL DEFAULT 0 COMMENT '添加时间',
    `update_time` int(10) NOT NULL DEFAULT 0 COMMENT '更新时间',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '广告列表管理' ROW_FORMAT = DYNAMIC;


DROP TABLE IF EXISTS `__PREFIX__adszone_zone`;
CREATE TABLE `__PREFIX__adszone_zone`  (
    `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '广告位名称',
    `mark` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '广告位标记',
    `type` enum('1','2','3') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1' COMMENT '广告位类型:1=图片广告,2=多图&幻灯广告,3=代码广告',
    `width` int(10) NOT NULL DEFAULT 0 COMMENT '广告宽度',
    `height` int(10) NOT NULL DEFAULT 0 COMMENT '广告高度',
    `code` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '广告代码',
    `create_time` int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
    `update_time` int(11) NOT NULL DEFAULT 0 COMMENT '更新时间',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '广告位管理' ROW_FORMAT = DYNAMIC;

SET FOREIGN_KEY_CHECKS = 1;
