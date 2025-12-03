import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [rsvped, setRsvped] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleRSVP = () => {
    setRsvped(!rsvped);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mb-6 hover:shadow-lg transition-shadow">
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
              <p className="font-semibold text-gray-900">{post.author}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{post.organization}</span>
                <span>•</span>
                <span>{post.timeAgo}</span>
              </div>
            </div>
          </div>
          {post.category && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              {post.category}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pb-3">
        {/* Post Title & Description */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
          <p className="text-gray-700 leading-relaxed">{post.description}</p>
        </div>

        {/* Event Details (if applicable) */}
        {post.eventDate && (
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-red-600" />
              <span>{post.eventDate}</span>
            </div>
            {post.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span>{post.location}</span>
              </div>
            )}
            {post.attendees && (
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                <span>{post.attendees} attending</span>
              </div>
            )}
          </div>
        )}

        {/* Post Image */}
        {post.image && (
          <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
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
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{likes} likes</span>
          <div className="flex gap-4">
            <span>{post.comments} comments</span>
            {post.shares && <span>{post.shares} shares</span>}
          </div>
        </div>
      </CardContent>

      <Separator />

      {/* Action Buttons */}
      <CardFooter className="pt-2 pb-3">
        <div className="flex items-center justify-around w-full gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex-1 ${liked ? 'text-red-600' : 'text-gray-600'} hover:text-red-600`}
          >
            <Heart className={`h-5 w-5 mr-2 ${liked ? 'fill-current' : ''}`} />
            Like
          </Button>
          
          <Button variant="ghost" size="sm" className="flex-1 text-gray-600 hover:text-blue-600">
            <MessageCircle className="h-5 w-5 mr-2" />
            Comment
          </Button>
          
          {post.eventDate && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRSVP}
              className={`flex-1 ${rsvped ? 'text-blue-600 bg-blue-50' : 'text-gray-600'} hover:text-blue-600`}
            >
              <Calendar className={`h-5 w-5 mr-2 ${rsvped ? 'fill-current' : ''}`} />
              {rsvped ? 'RSVP\'d' : 'RSVP'}
            </Button>
          )}
          
          <Button variant="ghost" size="sm" className="flex-1 text-gray-600 hover:text-blue-600">
            <Share2 className="h-5 w-5 mr-2" />
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Post;

