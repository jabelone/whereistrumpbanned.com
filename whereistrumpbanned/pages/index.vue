<template>
  <div>
    <section class="section background">
      <div class="content">
        <h1 class="title">Background</h1>
        <div>
          <p class="pb-2">
            On January 6 2021, a group of <i>domestic terrorists</i>
            <b-tooltip position="is-top" multilined>
              <b-icon icon="help-circle" size="is-small" />

              <template v-slot:content>
                <b>Why am I using this phrase?</b> <br />These people are not
                protestors, they are terrorists -
                <i
                  >a person who uses unlawful violence and intimidation,
                  especially against civilians, in the pursuit of political
                  aims</i
                >
                (definition from Oxford dictionary).
              </template></b-tooltip
            >
            stormed the United States Capitol after incitement by Donald Trump
            at an earlier rally. The riots disrupted the special joint session
            of Congress to count the Electoral College votes which are required
            to certify the results of the 2020 federal election.
          </p>
          <p>
            Donald Trump's continued lies about electoral and voter fraud, and
            attempts at preventing the peaceful transition of power have been
            frowned upon by leaders all around the world. However, after the
            unprecedented riots and storming of the US Capitol,
            <a href="https://twitter.com/i/events/1346985779981996032"
              >almost every major world leader</a
            >
            has condemned Trump's unethical and potentially illegal actions.
            This includes leaders of Canada, New Zealand, the UK, France, India,
            Australia, Scotland and many others.
          </p>
          <p>
            Due to these unprecedented events that have proven President Donald
            Trump is no longer capable of discharging his powers and duties of
            his office, there have been
            <a
              href="https://en.wikipedia.org/wiki/2021_efforts_to_remove_Donald_Trump_from_office"
            >
              calls to remove him from office before his term officially ends </a
            >.
          </p>
        </div>
      </div>
    </section>

    <section class="section banned-list">
      <div class="content">
        <div class="is-flex is-flex-direction-row">
          <h1 class="title pr-3">List of bans</h1>
          <img :src="require('@/assets/banned.png')" />
        </div>

        <div class="is-flex is-flex-direction-column">
          <ban-section
            v-for="article in bannedArticles"
            :key="article.name"
            :article="article"
          >
          </ban-section>
        </div>
      </div>
    </section>

    <section class="section related-list">
      <div class="content">
        <div class="is-flex is-flex-direction-row">
          <h1 class="title pr-3">Related backlash 🙅</h1>
          <img :src="require('@/assets/trump-unhappy.png')" />
        </div>

        <div class="is-flex is-flex-direction-column">
          <ban-section
            v-for="article in relatedArticles"
            :key="article.name"
            :article="article"
          >
          </ban-section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BanSection from '~/components/BanSection'

export default {
  name: 'HomePage',

  components: {
    BanSection,
  },

  data() {
    return {
      bannedArticles: [
        {
          title: 'Twitter',
          link:
            'https://edition.cnn.com/2021/01/06/tech/twitter-lock-trump-account/index.html',
          image: require('@/assets/twitter.png'),
          icon: '',
          description:
            'In a statement, Twitter said "We have required the removal of three @realDonaldTrump Tweets that were posted earlier today for repeated and severe violations of our Civic Integrity Policy," and "This means that the account of @realDonaldTrump will be locked for 12 hours following the removal of these Tweets. If the Tweets are not removed, the account will remain locked." They also added that "future violations... will result in permanent suspension of the @realDonaldTrump account."',
          length:
            'minimum of 12 hours, at least until some tweets are removed. Account is now restored.',
          date: 'Jan 7th, 2021 (the first)',
        },
        {
          title: 'Facebook',
          link:
            'https://www.washingtonpost.com/technology/2021/01/07/trump-twitter-ban/',
          image:
            'https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512',
          icon: '',
          description:
            '“We believe the risks of allowing the President to continue to use our service during this period are simply too great,” said Zuckerberg. “Therefore, we are extending the block we have placed on his Facebook and Instagram accounts indefinitely and for at least the next two weeks until the peaceful transition of power is complete.”',
          length:
            'indefinitely - at least until the peaceful transition of power is complete',
          date: 'Jan 7th, 2021',
        },
        {
          title: 'Instagram',
          link:
            'https://techcrunch.com/2021/01/07/mark-zuckerberg-announces-trump-banned-from-facebook-and-instagram-for-at-least-the-next-two-weeks/',
          image: require('@/assets/instagram.png'),
          icon: '',
          description:
            'Similar to Facebook above, the company said “We believe the risks of allowing the President to continue to use our service during this period are simply too great,” and “Therefore, we are extending the block we have placed on his Facebook and Instagram accounts indefinitely and for at least the next two weeks until the peaceful transition of power is complete.”',
          length:
            'indefinitely - at least until the peaceful transition of power is complete',
          date: 'Jan 7th, 2021',
        },
        {
          title: '',
          link:
            'https://www.theverge.com/2021/1/7/22219144/twitch-trump-ban-indefinitely-capitol-attack',
          image: require('@/assets/twitch.png'),
          icon: '',
          description:
            '“In light of yesterday’s shocking attack on the Capitol, we have disabled President Trump’s Twitch channel,” Twitch said in a statement. “Given the current extraordinary circumstances and the President’s incendiary rhetoric, we believe this is a necessary step to protect our community and prevent Twitch from being used to incite further violence.” They will "reassess" Trump\'s account after he leaves office.',
          length: 'indefinitely',
          date: 'Jan 7th, 2021',
        },
        {
          title: '',
          link:
            'https://www.wsj.com/articles/shopify-takes-trumpstore-com-offline-in-response-to-riot-11610035673',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1024px-Shopify_logo_2018.svg.png',
          icon: '',
          description:
            'Shopify released a statement saying that “Shopify does not tolerate actions that incite violence,” and that actions by the president “violate our Acceptable Use Policy, which prohibits promotion or support of organizations, platforms or people that threaten or condone violence. As a result, we have terminated stores affiliated with President Trump.” In total, Shopify removed two onlie stores that sold MAGA merchandise that used to be available at TrumpStore.com and Shop.DonaldJTrump.com.',
          length: 'indefinitely',
          date: 'Jan 8th, 2021',
        },
      ],
      relatedArticles: [
        {
          title: 'TikTok',
          link:
            'https://www.theverge.com/2021/1/7/22219644/tiktok-videos-trump-inciting-supporters-us-capitol',
          image: require('@/assets/tiktok.svg'),
          icon: '',
          description:
            'TikTok said it will remove videos of Trump\'s speech inciting his supporters to storm the US Capitol, citing their misinformation policy. They also said "Hateful behavior and violence have no place on TikTok ... Content or accounts that seek to incite, glorify, or promote violence violate our Community Guidelines and will be removed.” They also said they would block certain hashtags like #stormthecapitol and #patriotparty.',
          length: 'indefinitely',
          date: 'Jan 7th, 2021',
        },
        {
          title: '',
          link:
            'https://www.theverge.com/2021/1/6/22218088/twitch-bans-pogchamp-poggers-capitol-trump-violence-gootecks',
          image: require('@/assets/twitch.png'),
          icon: '',
          description:
            'Emotes - a popular style of online emoji - are extensively used on services like Twitch to convey emotion and feelings via text. After the face of the popular PogChamp emoji published tweets "encouraing further violence", the emote was deleted from the Twitch platform.',
          length: 'indefinitely',
          date: 'Jan 7th, 2021',
        },
        {
          title: '',
          link:
            'https://www.cnbc.com/2021/01/07/youtube-says-it-will-suspend-channels-claiming-widespread-voter-fraud.html',
          image: require('@/assets/yt.png'),
          icon: '',
          description:
            "YouTube anounced that it was going to issue strikes to any channels posting new videos with false claims. They said “Due to the disturbing events that transpired yesterday, and given that the election results have now been certified, starting today any channels posting new videos with false claims in violation of our policies will now receive a strike.” They also removed one of Trump's videos that was posted on Wednesday as it made false claims about the results of the election.",
          length: 'indefinitely',
          date: 'Jan 8th, 2021',
        },
      ],
    }
  },
}
</script>

BanSection
<style lang="scss" scoped>
.background {
  background-color: #a8dadc;
}

.section > .content {
  max-width: 1000px;
  margin: 0 auto;
}

.banned-list {
  background-color: #f1faee;
}

.related-list {
  background-color: #a8dadc;
}

.banned-list img,
.related-list img {
  max-height: 40px;
}
</style>
