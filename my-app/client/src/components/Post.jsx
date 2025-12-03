import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Calendar, MapPin, Users, Send } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [rsvped, setRsvped] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [attendees, setAttendees] = useState(post.attendees);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleRSVP = () => {
    setRsvped(!rsvped);
    setAttendees(rsvped ? attendees - 1 : attendees + 1);
  };

  const handleCommentClick = () => {
    setShowCommentBox(!showCommentBox);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mb-6 hover:shadow-lg dark:hover:shadow-2xl transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      {/* Post Header */}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.avatar} alt={post.author} />
              <AvatarFallback className="bg-blue-600 text-white">
                {post.author.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">{post.author}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{post.organization}</span>
                <span>•</span>
                <span>{post.timeAgo}</span>
              </div>
            </div>
          </div>
          
          {/* Tags Display - supports both single category and multiple tags */}
          <div className="flex flex-wrap gap-2 max-w-xs justify-end">
            {post.category && !post.tags && (
              <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                {post.category}
              </Badge>
            )}
            {post.tags && post.tags.length > 0 && post.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pb-3">
        {/* Post Title & Description */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{post.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.description}</p>
        </div>

        {/* Event Details (if applicable) */}
        {post.eventDate && (
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-red-600 dark:text-red-500" />
              <span>{post.eventDate}</span>
            </div>
            {post.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-600 dark:text-red-500" />
                <span>{post.location}</span>
              </div>
            )}
            {post.eventDate && (
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>{attendees} attending</span>
              </div>
            )}
          </div>
        )}

        {/* Post Image */}
        {post.image && (
          <div className="relative w-full h-80 bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </CardContent>

      <Separator />

      {/* Engagement Stats */}
      <CardContent className="py-2">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{likes} likes</span>
          <div className="flex gap-4">
            <span>{comments.length} comments</span>
            {post.shares !== undefined && <span>{post.shares} shares</span>}
          </div>
        </div>
      </CardContent>

      <Separator className="dark:bg-gray-700" />

      {/* Action Buttons */}
      <CardFooter className="pt-2 pb-3">
        <div className="flex items-center justify-around w-full gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex-1 ${liked ? 'text-red-600 dark:text-red-500' : 'text-gray-600 dark:text-gray-400'} hover:text-red-600 dark:hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700`}
          >
            <Heart className={`h-5 w-5 mr-2 ${liked ? 'fill-current' : ''}`} />
            Like
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleCommentClick}
            className={`flex-1 ${showCommentBox ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-400'} hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700`}
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Comment
          </Button>
          
          {post.eventDate && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRSVP}
              className={`flex-1 ${rsvped ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-400'} hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <Calendar className={`h-5 w-5 mr-2 ${rsvped ? 'fill-current' : ''}`} />
              {rsvped ? 'RSVP\'d' : 'RSVP'}
            </Button>
          )}
          
          <Button variant="ghost" size="sm" className="flex-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Share2 className="h-5 w-5 mr-2" />
            Share
          </Button>
        </div>
      </CardFooter>

      {/* Comment Box */}
      {showCommentBox && (
        <>
          <Separator className="dark:bg-gray-700" />
          <CardContent className="pt-4 pb-4">
            <div className="space-y-3">
              {/* Display existing comments */}
              {comments.length > 0 && (
                <div className="space-y-2 mb-3">
                  {comments.map((comment, index) => (
                    <div key={index} className="flex gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-blue-600 text-white text-xs">
                          You
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">You</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Comment input */}
              <div className="flex gap-2 items-start">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-600 text-white">
                    You
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 flex gap-2">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-1 min-h-[80px] p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleCommentSubmit();
                      }
                    }}
                  />
                  <Button 
                    onClick={handleCommentSubmit}
                    disabled={!commentText.trim()}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white"
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 ml-12">Press Enter to post or Shift+Enter for new line</p>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default Post;

