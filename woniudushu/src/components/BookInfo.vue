<template>
<div class='bookinfo'>
	<div class="thumb">
		<img class='back' :src="book.image" mode='aspectFill'>
		<img class="img"  :src="book.image" mode='aspectFit'>
		<div class="info">
			<div class="title">
				{{book.title}}
			</div>
			<div class="author">
				{{book.author}}
			</div>
		</div>
	</div>

	<div class="detail">
		<img :src="userinfo.avatar" class="avatar" mode="aspectFit" />
		{{userinfo.name}}
		<div class="right text-primary">
			{{book.rate}}分
			<Rate :value='book.rate'></Rate>
		</div>
		<div class="detail">
			{{book.publisher}}
			<div class="right">
				{{book.price}}
			</div>
		</div>
		<div class="tags">
			<div class="badge" :key='key' v-for="tag in book.tags">
				{{tag}}
			</div>
		</div>
		<div class="summary">
			<p :key='i' v-for='(sum,i) in book.summary'>{{sum}}</p>
		</div>
	</div>

</div>
</template>

<script>
import Rate from '@/components/Rate'

export default {
	components: {
		Rate
	},
	props: ['book'],
	computed: {
		userinfo() {
			return this.book.user_info || {}
		}
	}

}
</script>


<style lang='scss'>
.bookinfo {
    font-size: 14px;

    .badge {
        display: inline-block;
        margin: 5px;
        padding: 5px;
        border-radius: 10px;
        border: 1px #EA5A49 solid;
        color: #EA5A49;
    }
    .summary {
        padding: 0 15px;
        margin-top: 10px;
        p {
            text-indent: 2em;
            font-size: 14px;
        }
    }
    .right {
        float: right;
    }
    .detail {
        padding: 5px 10px;
        .avatar {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            vertical-align: middle;
        }
    }
    .thumb {
        width: 750rpx;
        height: 500rpx;
        overflow: hidden;
        position: relative;
        .back {
            filter: blur(15px);
            width: 100%;
        }
        .img {
            position: absolute;
            width: 100%;
            height: 300rpx;
            left: 0;
            top: 30rpx;
        }
        .info {
            color: white;
            position: absolute;
            width: 100%;
            left: 0;
            top: 330rpx;
            text-align: center;
            .title {
                font-size: 20px;
            }
            .author {
                font-size: 14px;
            }

        }
    }
}
</style>
