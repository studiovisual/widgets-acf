<?php 

if(!defined('ABSPATH')) exit;

class WidgetsLocation extends ACF_Location {

    public function initialize() {
        $this->name = 'widget_acf';
        $this->label = 'Widget ACF';
        $this->category = 'forms';
        // $this->object_type = 'post';
    }

    public function get_values($rule) {
        $widgets = array();
        $path =  get_template_directory()."/widgets-templates";

        if(!is_dir($path))
            return $widgets;
            
        $dir = new DirectoryIterator($path);

        foreach($dir as $fileinfo):            
            if($fileinfo->isDir() && !$fileinfo->isDot()):
                $widget_name =  str_replace('-', '_', $fileinfo->getFilename());

                $widgets[$widget_name] = $widget_name;
            endif;
        endforeach;
        
        return $widgets;
    }

    public function match($rule, $screen, $field_group) {
        // Check screen args for "post_id" which will exist when editing a post.
        // Return false for all other edit screens.
        // if( isset($screen['post_id']) ) {
        //     $post_id = $screen['post_id'];
        // } else {
        //     return false;
        // }

        // // Load the post object for this edit screen.
        // $post = get_post( $post_id );
        // if( !$post ) {
        //     return false;
        // }

        // // Compare the Post's author attribute to rule value.
        // $result = ( $post->post_author == $rule['value'] );

        // // Return result taking into account the operator type.
        // if( $rule['operator'] == '!=' ) {
        //     return !$result;
        // }
        // return $result;
    }

}