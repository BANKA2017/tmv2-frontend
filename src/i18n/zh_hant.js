module.exports = {
    public: {
        search: "搜索",
        followers: "关注者",
        following: "正在關注",
        statuses_count: "總推文數",
        deleted: "刪除",
        protected: "保護",
        retry: "重試",
        profile: "簡介",
        tweet: "推文",
        error: "出错",
        translate: "翻譯",
        loading: "加載中",
        timestamp: "時間戳",
        origin: '原創',
        retweet: '轉推',
        media: '媒體',
        username: "用戶名",
        group: "組",
        time: {
            second: "秒 | 秒",
            minute: "分鐘 | 分鐘",
            hour: "小時 | 小時",//其他语言可能会出现单复数
            day: "天 | 天",
        }
    },
    timeline: {
        message: {
            not_exist: "@{0} 不存在",
            no_longer_monitor_deleted: "此賬號已刪除，我們將不再監控此賬號",
            no_longer_monitor_protected: "此賬號已被保護，我們將不再監控此賬號",
            load_more: "加載更多",
            no_more: "已經沒有更多的内容",
        },
        nav_bar: {
            all: '全部',
            origin: '原創',
            retweet: '轉推',
            media: '媒體',
            no_image: '無圖',
        },
        side_tags: {
            settings: "設定",
            about: "關於",
            stats: "統計",
            status: "狀態",
            api: "API",
            media_download_tool: "媒體下載",
            rss: "RSS",
            backstage: "管理",
        },
        scripts: {
            time: "時間",
            message: {
                update_tweets: "已加載 {0} 條推文 | 已加載 {0} 條推文",//外语需要考虑单复数问题
                missing_parameter: "缺少參數",
                failed_to_generate_chart: "圖表生成失敗 #{0}",
            }
        }
    },
    translate: {
        message: {
            translate_by: "由 {0} 翻譯",
            clean: "取消翻譯",
            hide_translated: "隱藏翻譯",//Hide translated Tweet
            translate_profile: "翻譯簡介",
            translate_tweet: "翻譯推文",
        }
    },
    userinfo: {
        message: {
            load_success: "成功加載 {0} (@{1})"
        }
    },
    candlestick_chart: {
        chart: {
            candle_sticks: "日K"
        }
    },
    project_list: {
        button: {
            select_project: "選擇企劃"
        }
    },
    quote_card: {
        card: {
            this_tweet_is_not_available: "這條推文不可用。"
        }
    },
    search :{
        normal_search: {
            input_text_here: "請輸入内容",
            select: "請選擇",
            search_by_text: "文字搜索",
            search_by_date: "日期搜索",
            advanced_search: "高級搜索",
        },
        advanced_search: {
            all_of_these_words: "所有這些詞語",
            example_text_include: "例如：什麽 新鮮事 · 既包含“什麽”，也包含“新鮮事”",
            from_this_accounts: "來自這些用戶",
            example_from_this_accounts: "例如：@Twitter · 來自 @Twitter",
            clean: "清空",
            example_search_time: "例如：2021-01-01 -> 2021-01-02",
            nav_bar: {
                all: '全部',
                origin: '原創',
                retweet: '轉推',
                media_only: '僅媒體',
                reverse: "反序",
                hidden: "顯示隱藏",
            },
            tips: {
                line1: {
                    text: "* {or_mode}為“或”，{and_mode}為“且”，{not_mode}會根據前者出現“或非”或“且非”",
                    or_mode: "OR模式",
                    and_mode: "AND模式",
                    not_mode: "NOT模式"
                },
                line2: "* 輸入框使用空格分割詞語",
            },
            search: "搜索",
        },
        nav_list: {
            search_by_tag: "查找標簽 {0}",
            search_by_tweet_id: "查找推文 {0}",
            search_by_text: "搜索 {0}"
        },
        tips: {
            tips: "提示",
            tips_sub_title: "快速搜索入門",
            line1: "首字符為{at}可以快速定位到全站任何用戶，支持twitter用戶名及本地別名，支持正則表達式，此功能適用於全站",
            line2: "首字符為{hashtag}可定位hashtag，此功能適用於全站",
            line3: "首字符為{cashtag}可定位cashtag，此功能適用於全站",
            line4: "在輸入框輸入任何内容可進行對推文内容的搜索，此功能適用於全站，加限制符{at_username}可定位到對應用戶",
            line5: "用戶頁中輸入數字或文字可檢索當前用戶推文",
            line6: "任何時候在輸入框鍵入{help_en}可彈出此教程",
        }
    },
    tw_card: {
        text: {
            not_supported_type: "不支持的類型",
            list: "列表",
            members_count: "{0} 成員 | {0} 成員"
        }
    },
    tweet: {
        text: {
            pinned_tweet: "置頂推文",
            this_is_a_dispute_tweet: "則是以一條有爭議的推文",
            learn_more: "瞭解更多"
        }
    },
    polls: {
        vote: "{0} 次投票 | {0} 次投票",//单复数
        final_results: "最終結果",
        wait_for_sync: "等待同步",
        eta: "剩下 {0}",
    },
    notice: {
        nothing_here: "這裏什麽都沒有哦~",
        internet_speed_is_too_slow_now_image_display_has_been_turned_off: "網路鏈接速率過低，已關閉圖像顯示",
    },
    settings: {
        language: "語言",
        api_path: "API目錄",
        default_api_path: "默認API目錄: {0}",
        media_path: "媒體目錄",
        default_media_path: "默認媒體目錄: {0}",
    },
}
