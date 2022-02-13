export const RESP = {
  USER_LOGIN: {
    result: true,
    userInfo: {
      username: "1003gorkd@naver.com",
      userId: "goodgoddog",
    },
    header: "JSESSIONID=3CB361E0BE1A9A7DE7DB926DF0772BAE",
  }, // 로그인

  USER_SIGNUP: {
    result: true,
  }, // 회원가입

  USER_IDCHECK: {
    result: true,
  }, // 아이디 중복검사

  USER_ISLOGIN: {
    result: true,
    userInfo: {
      username: "1003gorkd@naver.com",
      userId: "goodgoddog",
    },
  }, // 로그인 여부 확인

  USER_LOGOUT: {
    result: true,
  },

  POSTS_LIST: {
    result: true,
    postList: [
      {
        userInfo: {
          username: "1003gorkd@naver.com",
          userId: "1",
        },
        postId: "1",
        postTitle: "title",
        postContents: "content",
        postLanguage: "javascript",
        postTag: ["tag1", "tag2", "tag3"],
        postProblem: false,
      },
      {
        userInfo: {
          username: "1003gorkd@naver.com",
          userId: "1",
        },
        postId: "2",
        postTitle: "title2",
        postContents: "content",
        postLanguage: "java",
        postTag: ["tag1", "tag2", "tag3", "tag4"],
        postProblem: false,
      },
      {
        userInfo: {
          username: "1003gorkd@naver.com",
          userId: "1",
        },
        postLike: "0",
        postId: "3",
        postTitle: "title3",
        postContents: "content3",
        postLanguage: "python",
        postTag: ["tag1"],
        postProblem: false,
      },
      {
        userInfo: {
          username: "1003gorkd@naver.com",
          userId: "1",
        },
        postId: "4",
        postTitle: "title4",
        postContents: "content",
        postLanguage: "css",
        postTag: ["tag1", "tag2", "tag3", "tag4", "tag5"],
        postProblem: true,
      },
    ],
  }, // 게시물 전체 조회

  POSTS_LIST_POSTID: {
    result: true,
    post: {
      userInfo: {
        username: "1003gorkd@naver.com",
        userId: "1",
      },
      postId: "1",
      postTitle: "title",
      postContents: "content",
      postLanguage: "language",
      postTag: ["tag1", "tag2"],
      postProblem: false,
    },
  }, // 게시물 단건 조회

  POSTS: {
    result: true,
  }, // 게시물 작성

  POSTS_POSTID_EDIT: {
    result: true,
  }, // 게시물 수정

  POSTS_PROBLEM_POSTID: {
    result: true,
  }, // 해결 여부 버튼

  POSTS_POSTID_DELETE: {
    result: true,
  }, // 게시글 삭제

  COMMENT_POSTID: {
    result: true,
  }, // 댓글 작성

  COMMENT_COMMENTID: {
    result: true,
  }, // 댓글 삭제

  POST_COMMENT_COMMENTID: {
    result: true,
  }, // 댓글 좋아요 버튼

  COMMENT_LIST: {
    result: true,
    data: {
      commentList: [
        {
          comment: {
            userInfo: {
              username: "1003gorkd@naver.com",
              userId: "1",
            },
          },
          commentId: "1",
          commentContent: "댓글 테스트",
          commentLikes: [
            {
              username: "gorkd1@naver.com",
              userId: "1",
            },
            {
              username: "gorkd2@naver.com",
              userId: "2",
            },
          ],
        },
        {
          comment: {
            userInfo: {
              username: "1003gorkd@naver.com",
              userId: "1",
            },
          },
          commentId: "1",
          commentContent: "댓글 테스트",
          commentLikes: [
            {
              username: "gorkd1@naver.com",
              userId: "1",
            },
            {
              username: "gorkd2@naver.com",
              userId: "2",
            },
          ],
        },
        {
          comment: {
            userInfo: {
              username: "1003gorkd@naver.com",
              userId: "1",
            },
          },
          commentId: "1",
          commentContent: "댓글 테스트",
          commentLikes: [
            {
              username: "gorkd1@naver.com",
              userId: "1",
            },
            {
              username: "gorkd2@naver.com",
              userId: "2",
            },
          ],
        },
      ],
    },
  },
};
