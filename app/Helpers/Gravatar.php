<?php

namespace App\Helpers;

class Gravatar
{

    public function __construct(){ }

    /**
     * Get user gravatar
     * @param  string $email 
     * @return string
     */
    public static function getGravatar($email, $size = 100){

        // gravatar does not accept images on localhost, get io in this case
        $path = config('app.env') == 'local' ? 'https://booking.builderall.io' : url('/');
        
        $default_image = $path.'/images/images/dashboard/default-user.png';

        $hash = md5($email);

        $params = http_build_query([
            's' => $size,
            'd' => $default_image,
            'r' => 'g'
        ]);

        $image = '//secure.gravatar.com/avatar/'.$hash.'?'.$params;

        return $image;
    }

}
