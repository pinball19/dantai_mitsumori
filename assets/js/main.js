// チャットボットの会話フロー制御
let conversationStep = 0;

function selectOption(option) {
    // 社員旅行を選択した場合の処理
    document.getElementById('user-message-1').textContent = option + 'を検討しています。';
    document.getElementById('user-message-1').style.display = 'block';
    
    // タイピングインジケーター表示
    document.getElementById('typing-indicator').style.display = 'flex';
    
    // 少し待ってからボットの返信を表示
    setTimeout(() => {
        document.getElementById('typing-indicator').style.display = 'none';
        document.getElementById('bot-message-1').style.display = 'block';
        document.getElementById('quick-reply-1').style.display = 'flex';
        
        // チャットメッセージエリアを下にスクロール
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1500);
    
    conversationStep = 1;
}

function selectParticipants(participants) {
    document.getElementById('user-message-2').textContent = participants + '程度です。';
    document.getElementById('user-message-2').style.display = 'block';
    document.getElementById('quick-reply-1').style.display = 'none';
    
    // タイピングインジケーター表示
    document.getElementById('typing-indicator').style.display = 'flex';
    
    setTimeout(() => {
        document.getElementById('typing-indicator').style.display = 'none';
        document.getElementById('bot-message-2').style.display = 'block';
        document.getElementById('quick-reply-2').style.display = 'flex';
        
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1500);
    
    conversationStep = 2;
}

function selectDestination(destination) {
    document.getElementById('user-message-3').textContent = destination + 'を検討しています。';
    document.getElementById('user-message-3').style.display = 'block';
    document.getElementById('quick-reply-2').style.display = 'none';
    
    // タイピングインジケーター表示
    document.getElementById('typing-indicator').style.display = 'flex';
    
    setTimeout(() => {
        document.getElementById('typing-indicator').style.display = 'none';
        document.getElementById('bot-message-3').style.display = 'block';
        document.getElementById('quick-reply-3').style.display = 'flex';
        
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1500);
    
    conversationStep = 3;
}

function selectBudget(budget) {
    document.getElementById('user-message-4').textContent = budget + 'を考えています。';
    document.getElementById('user-message-4').style.display = 'block';
    document.getElementById('quick-reply-3').style.display = 'none';
    
    // タイピングインジケーター表示
    document.getElementById('typing-indicator').style.display = 'flex';
    
    setTimeout(() => {
        document.getElementById('typing-indicator').style.display = 'none';
        document.getElementById('bot-message-4').style.display = 'block';
        document.getElementById('quick-reply-4').style.display = 'flex';
        
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 2500);
    
    conversationStep = 4;
}

function showEstimatePanel() {
    document.getElementById('estimate-panel').style.display = 'block';
    
    // パネルへスクロール
    document.getElementById('estimate-panel').scrollIntoView({
        behavior: 'smooth'
    });
}

function askMoreQuestions() {
    // 新しいメッセージを追加
    const chatMessages = document.getElementById('chat-messages');
    
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = 'もう少し質問したいです。';
    chatMessages.appendChild(userMessage);
    
    // タイピングインジケーター表示
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'typing-dot';
        typingIndicator.appendChild(dot);
    }
    chatMessages.appendChild(typingIndicator);
    
    // スクロール
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    setTimeout(() => {
        // タイピングインジケーター削除
        chatMessages.removeChild(typingIndicator);
        
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = 'もちろんです。どのようなことをお知りになりたいですか？';
        chatMessages.appendChild(botMessage);
        
        // 新しいクイックリプライを追加
        const quickReplies = document.createElement('div');
        quickReplies.className = 'quick-replies';
        
        const replies = ['宿泊施設について', '観光スポットについて', '移動手段について', '食事について'];
        replies.forEach(reply => {
            const quickReply = document.createElement('div');
            quickReply.className = 'quick-reply';
            quickReply.textContent = reply;
            quickReply.onclick = function() {
                addAdditionalQuestion(reply);
            };
            quickReplies.appendChild(quickReply);
        });
        
        chatMessages.appendChild(quickReplies);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1500);
}

function addAdditionalQuestion(topic) {
    const chatMessages = document.getElementById('chat-messages');
    
    // ユーザーの質問を追加
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = topic;
    chatMessages.appendChild(userMessage);
    
    // 直前のクイックリプライを削除
    const quickReplies = chatMessages.querySelector('.quick-replies:last-child');
    if (quickReplies) {
        chatMessages.removeChild(quickReplies);
    }
    
    // タイピングインジケーター表示
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'typing-dot';
        typingIndicator.appendChild(dot);
    }
    chatMessages.appendChild(typingIndicator);
    
    // スクロール
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // 回答内容を準備
    let answer = '';
    switch(topic) {
        case '宿泊施設について':
            answer = '沖縄の社員旅行では、那覇市内のホテルが人気です。予算に応じて、ビーチリゾートホテルや市街地のビジネスホテルなど様々な選択肢がございます。4〜5つ星ホテルだと1泊8,000円〜12,000円、3つ星だと5,000円〜8,000円程度が目安です。30〜50名規模ですと、同じホテルに全員宿泊できる施設をご提案できます。';
            break;
        case '観光スポットについて':
            answer = '沖縄の人気観光スポットとしては、美ら海水族館、首里城、古宇利島、万座毛などがございます。社員旅行では、チームビルディングに最適なマリンアクティビティ（シュノーケリングやグラスボート）や、沖縄の文化体験（琉球衣装体験、エイサー体験など）も人気です。2泊3日のプランですと、北部・中部・南部とバランスよく観光することが可能です。';
            break;
        case '移動手段について':
            answer = '30〜50名規模の団体様ですと、貸切バスでの移動が最も便利です。那覇空港から各観光地への移動や、ホテルと観光地間の送迎など、すべての移動を一貫して手配することができます。季節によりますが、40人乗り大型バス1台で1日あたり8〜10万円程度が目安です。ドライバーは沖縄の観光に精通しているので、移動中も島の歴史や文化についての解説が聞けます。';
            break;
        case '食事について':
            answer = '沖縄料理は社員旅行でも大変人気です。代表的な沖縄料理（ラフテー、ゴーヤチャンプルー、沖縄そばなど）を味わえる店舗や、海鮮料理が自慢の店舗など様々なタイプの飲食店をご紹介できます。団体様向けの沖縄料理店は1人あたり3,000円〜5,000円程度、海鮮料理や焼肉などの特別な夕食会場は5,000円〜8,000円程度が目安です。アレルギー対応や特別食のご要望にも対応可能です。';
            break;
        default:
            answer = 'その点についての詳細情報をお調べして、担当者よりご連絡させていただきます。他にご質問はございますか？';
    }
    
    setTimeout(() => {
        // タイピングインジケーター削除
        chatMessages.removeChild(typingIndicator);
        
        // ボットの回答を追加
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = answer;
        chatMessages.appendChild(botMessage);
        
        // 見積もり依頼ボタンを追加
        const actionReplies = document.createElement('div');
        actionReplies.className = 'quick-replies';
        
        const estimateReply = document.createElement('div');
        estimateReply.className = 'quick-reply';
        estimateReply.textContent = '概算見積もりを見る';
        estimateReply.onclick = function() {
            showEstimatePanel();
        };
        
        const moreQuestionsReply = document.createElement('div');
        moreQuestionsReply.className = 'quick-reply';
        moreQuestionsReply.textContent = '他の質問をする';
        moreQuestionsReply.onclick = function() {
            askMoreQuestions();
        };
        
        actionReplies.appendChild(estimateReply);
        actionReplies.appendChild(moreQuestionsReply);
        chatMessages.appendChild(actionReplies);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 2000);
}

function sendMessage() {
    const inputField = document.getElementById('chat-input-field');
    const message = inputField.value.trim();
    
    if (message === '') return;
    
    const chatMessages = document.getElementById('chat-messages');
    
    // ユーザーメッセージを追加
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = message;
    chatMessages.appendChild(userMessage);
    
    // 入力フィールドをクリア
    inputField.value = '';
    
    // スクロール
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // タイピングインジケーター表示
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'typing-dot';
        typingIndicator.appendChild(dot);
    }
    chatMessages.appendChild(typingIndicator);
    
    // 会話の流れに応じた返信
    setTimeout(() => {
        chatMessages.removeChild(typingIndicator);
        
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        
        // 簡易的なキーワード判定（実際はもっと高度な自然言語処理が必要）
        if (message.includes('見積') || message.includes('料金') || message.includes('予算') || message.includes('費用')) {
            botMessage.textContent = '概算見積もりをご用意しました。下記のボタンからご確認いただけます。';
            chatMessages.appendChild(botMessage);
            
            const actionReply = document.createElement('div');
            actionReply.className = 'quick-replies';
            
            const estimateBtn = document.createElement('div');
            estimateBtn.className = 'quick-reply';
            estimateBtn.textContent = '見積もりを確認する';
            estimateBtn.onclick = function() {
                showEstimatePanel();
            };
            
            actionReply.appendChild(estimateBtn);
            chatMessages.appendChild(actionReply);
        } else if (message.includes('ホテル') || message.includes('宿') || message.includes('泊まる')) {
            botMessage.textContent = '沖縄には様々なタイプのホテルがございます。海の見えるリゾートホテルから市街地のビジネスホテルまで、ご予算や目的に応じてご提案可能です。30〜50名規模でしたら、同一ホテルでの宿泊手配が可能です。';
            chatMessages.appendChild(botMessage);
        } else if (message.includes('バス') || message.includes('移動') || message.includes('交通')) {
            botMessage.textContent = '沖縄での団体旅行には貸切バスが便利です。空港からホテル、各観光地への移動をすべてカバーします。40人乗りの大型バスで1日あたり8〜10万円程度が目安です。';
            chatMessages.appendChild(botMessage);
        } else {
            botMessage.textContent = 'ご質問ありがとうございます。より詳細な情報を提供するために、担当者に引き継がせていただきます。お客様の連絡先をご入力いただけますと、後ほど担当者からご連絡いたします。';
            chatMessages.appendChild(botMessage);
            
            const contactForm = document.createElement('div');
            contactForm.className = 'quick-replies';
            
            const contactBtn = document.createElement('div');
            contactBtn.className = 'quick-reply';
            contactBtn.textContent = '連絡先を入力する';
            contactBtn.onclick = function() {
                requestDetailedEstimate();
            };
            
            contactForm.appendChild(contactBtn);
            chatMessages.appendChild(contactForm);
        }
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1500);
}

function modifyEstimate() {
    // 見積もりパネルを閉じる
    document.getElementById('estimate-panel').style.display = 'none';
    
    // チャットに戻る
    const chatMessages = document.getElementById('chat-messages');
    
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = 'プランを調整したいです。';
    chatMessages.appendChild(userMessage);
    
    // タイピングインジケーター表示
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'typing-dot';
        typingIndicator.appendChild(dot);
    }
    chatMessages.appendChild(typingIndicator);
    
    setTimeout(() => {
        chatMessages.removeChild(typingIndicator);
        
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = 'プランの調整承りました。どのような点を変更されたいですか？';
        chatMessages.appendChild(botMessage);
        
        const adjustOptions = document.createElement('div');
        adjustOptions.className = 'quick-replies';
        
        const options = ['予算を下げたい', 'ホテルグレードを上げたい', '観光スポットを変更したい', 'アクティビティを追加したい'];
        options.forEach(option => {
            const optionBtn = document.createElement('div');
            optionBtn.className = 'quick-reply';
            optionBtn.textContent = option;
            optionBtn.onclick = function() {
                adjustPlan(option);
            };
            adjustOptions.appendChild(optionBtn);
        });
        
        chatMessages.appendChild(adjustOptions);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1500);
}

function adjustPlan(option) {
    const chatMessages = document.getElementById('chat-messages');
    
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = option;
    chatMessages.appendChild(userMessage);
    
    // 直前のクイックリプライを削除
    const quickReplies = chatMessages.querySelector('.quick-replies:last-child');
    if (quickReplies) {
        chatMessages.removeChild(quickReplies);
    }
    
    // タイピングインジケーター表示
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'typing-dot';
        typingIndicator.appendChild(dot);
    }
    chatMessages.appendChild(typingIndicator);
    
    let response = '';
    switch(option) {
        case '予算を下げたい':
            response = '予算を抑えるプランをご提案いたします。以下のような調整が可能です：\n\n・宿泊施設をビジネスホテルクラスに変更（1人あたり約5,000円削減）\n・フリータイムを増やして観光バスの利用日数を減らす（1人あたり約3,000円削減）\n・グループでの食事回数を減らし、自由食を増やす（1人あたり約3,000円削減）\n\nこれらの調整により、お一人様あたり38,000円〜42,000円程度に抑えることが可能です。';
            break;
        case 'ホテルグレードを上げたい':
            response = 'より上質なホテルをご希望ですね。沖縄では以下のようなラグジュアリーホテルがございます：\n\n・ザ・リッツカールトン沖縄（1泊あたり約25,000円〜）\n・ハレクラニ沖縄（1泊あたり約30,000円〜）\n・ハイアットリージェンシー瀬良垣アイランド（1泊あたり約22,000円〜）\n\nこれらのホテルに変更した場合、お一人様あたり60,000円〜70,000円程度になります。特別な記念旅行には最適です。';
            break;
        case '観光スポットを変更したい':
            response = '沖縄には多くの魅力的な観光スポットがございます。例えば：\n\n・世界遺産コース（首里城、中城城跡、斎場御嶽など）\n・離島コース（石垣島、宮古島、久米島など）\n・アクティビティコース（マリンスポーツ、ジャングルトレッキングなど）\n・文化体験コース（やちむん作り、琉球衣装体験、エイサー体験など）\n\n希望のテーマがございましたら、その方向でプランをカスタマイズいたします。';
            break;
        case 'アクティビティを追加したい':
            response = '沖縄ならではのアクティビティを追加することで、より思い出に残る旅行になります。人気のアクティビティには：\n\n・チームビルディング向け：沖縄の伝統漁法「追い込み漁」体験（1人約8,000円）\n・マリンスポーツセット：シュノーケリング、パラセイリング、バナナボート（1人約12,000円）\n・文化体験：琉球衣装体験、沖縄三線体験、エイサー太鼓体験（1人約6,000円）\n・クルージング：サンセットクルーズ＆ディナー（1人約10,000円）\n\nこれらのアクティビティを追加した場合、基本プランに加算されます。';
            break;
    }
    
    setTimeout(() => {
        chatMessages.removeChild(typingIndicator);
        
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerHTML = response.replace(/\n/g, '<br>');
        chatMessages.appendChild(botMessage);
        
        const actionReplies = document.createElement('div');
        actionReplies.className = 'quick-replies';
        
        const updateEstimateBtn = document.createElement('div');
        updateEstimateBtn.className = 'quick-reply';
        updateEstimateBtn.textContent = '新しい見積もりを希望';
        updateEstimateBtn.onclick = function() {
            requestDetailedEstimate();
        };
        
        const otherAdjustBtn = document.createElement('div');
        otherAdjustBtn.className = 'quick-reply';
        otherAdjustBtn.textContent = '他の調整をしたい';
        otherAdjustBtn.onclick = function() {
            modifyEstimate();
        };
        
        actionReplies.appendChild(updateEstimateBtn);
        actionReplies.appendChild(otherAdjustBtn);
        chatMessages.appendChild(actionReplies);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 2000);
}

function requestDetailedEstimate() {
    const chatMessages = document.getElementById('chat-messages');
    
    // 見積もりパネルを閉じる（表示されている場合）
    document.getElementById('estimate-panel').style.display = 'none';
    
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = '詳細な見積もりをお願いします。';
    chatMessages.appendChild(userMessage);
    
    // タイピングインジケーター表示
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'typing-dot';
        typingIndicator.appendChild(dot);
    }
    chatMessages.appendChild(typingIndicator);
    
    setTimeout(() => {
        chatMessages.removeChild(typingIndicator);
        
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerHTML = 'ありがとうございます。詳細な見積もりをご希望ですね。<br><br>担当者より詳細なお見積りをお送りするために、以下の連絡先情報をご入力ください：<br>・お名前<br>・メールアドレス<br>・電話番号（任意）<br>・ご希望の連絡方法<br><br>通常1営業日以内に、ご希望のプランに合わせた詳細なお見積りをお送りいたします。';
        chatMessages.appendChild(botMessage);
        
        // 連絡先フォームボタン
        const contactBtn = document.createElement('div');
        contactBtn.className = 'quick-replies';
        
        const formBtn = document.createElement('div');
        formBtn.className = 'quick-reply';
        formBtn.textContent = '連絡先を入力する';
        formBtn.onclick = function() {
            openContactForm();
        };
        
        contactBtn.appendChild(formBtn);
        chatMessages.appendChild(contactBtn);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1500);
}

function openContactForm() {
    alert('ここで連絡先入力フォームが開きます。実際の実装では、モーダルウィンドウや新しいページで連絡先情報を収集します。');
    
    const chatMessages = document.getElementById('chat-messages');
    
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.innerHTML = 'ご連絡先の入力ありがとうございました！<br><br>明日までに、旅行プランナーの佐藤よりご連絡いたします。ご質問やご要望がございましたら、引き続きこのチャットでお気軽にお問い合わせください。<br><br>旅行の幹事.comをご利用いただき、ありがとうございます。';
    chatMessages.appendChild(botMessage);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// FAQのアコーディオン機能
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // 他のすべての回答を閉じる
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.style.display = 'none';
            });
            
            document.querySelectorAll('.faq-question').forEach(item => {
                item.classList.remove('active');
            });
            
            // クリックされた質問の回答を開く/閉じる
            if (!isActive) {
                question.classList.add('active');
                answer.style.display = 'block';
            }
        });
    });
    
    // チャット入力欄でEnterキーを押したときの処理
    document.getElementById('chat-input-field').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
            e.preventDefault();
        }
    });
    
    // 追従CTAの表示制御
    const floatingCta = document.querySelector('.floating-cta');
    const chatSectionTop = document.getElementById('ai-chat').offsetTop;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > chatSectionTop + 500) {
            floatingCta.style.display = 'flex';
        } else {
            floatingCta.style.display = 'none';
        }
    });
});
