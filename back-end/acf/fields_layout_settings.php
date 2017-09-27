<?php 

$fields_layout_settings = array (
			'key' => 'fields_layout_settings',
			'label' => ' AJUSTES DE LAYOUT',
			'name' => 'ajustes_de_layout',
			'type' => 'group',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array (
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'layout' => 'block',
			'sub_fields' => array (
				array (
					'key' => 'largura_layout_setting',
					'label' => 'Largura',
					'name' => 'largura',
					'type' => 'radio',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array (
						'width' => '',
						'class' => 'fa fa-tasks',
						'id' => '',
					),
					'choices' => array (
						'container' => 'Boxed',
						'full' => 'Full width',
					),
					'allow_null' => 0,
					'other_choice' => 0,
					'save_other_choice' => 0,
					'default_value' => '',
					'layout' => 'horizontal',
					'return_format' => 'value',
				),
				array (
					'key' => 'background_layout_setting',
					'label' => 'Background',
					'name' => 'background',
					'type' => 'select',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array (
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'choices' => array (
						'transparent' => 'Transparente',
						'color' => 'Cor Background',
						'background' => 'Imagem Background',
					),
					'default_value' => array (
						0 => 'transparent',
					),
					'allow_null' => 0,
					'multiple' => 0,
					'ui' => 0,
					'ajax' => 0,
					'return_format' => 'value',
					'placeholder' => '',
				),
				array (
					'key' => 'imagem_layout_setting',
					'label' => 'Imagem de fundo',
					'name' => 'imagem_de_fundo',
					'type' => 'image',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => array (
						array (
							array (
								'field' => 'background_layout_setting',
								'operator' => '==',
								'value' => 'background',
							),
						),
					),
					'wrapper' => array (
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'return_format' => 'array',
					'preview_size' => 'thumbnail',
					'library' => 'all',
					'min_width' => '',
					'min_height' => '',
					'min_size' => '',
					'max_width' => '',
					'max_height' => '',
					'max_size' => '',
					'mime_types' => '',
				),
				array (
					'key' => 'cor_layout_setting',
					'label' => 'Cor de fundo',
					'name' => 'cor_de_fundo',
					'type' => 'color_picker',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => array (
						array (
							array (
								'field' => 'background_layout_setting',
								'operator' => '==',
								'value' => 'color',
							),
						),
					),
					'wrapper' => array (
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'default_value' => '',
				),
				array (
					'key' => 'padding_layout_setting',
					'label' => 'Padding',
					'name' => 'padding_layout',
					'type' => 'group',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array (
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'layout' => 'table',
					'sub_fields' => array (
						array (
							'key' => 'padding_top_layout_setting',
							'label' => 'Top',
							'name' => 'padding_top',
							'type' => 'number',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array (
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'default_value' => '',
							'placeholder' => '0',
							'prepend' => '',
							'append' => 'px',
							'maxlength' => '',
						),
						array (
							'key' => 'padding_left_layout_setting',
							'label' => 'Left',
							'name' => 'padding_left',
							'type' => 'number',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array (
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'default_value' => '',
							'placeholder' => '0',
							'prepend' => '',
							'append' => 'px',
							'maxlength' => '',
						),
						array (
							'key' => 'padding_bottom_layout_setting',
							'label' => 'Bottom',
							'name' => 'padding_bottom',
							'type' => 'number',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array (
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'default_value' => '',
							'placeholder' => '0',
							'prepend' => '',
							'append' => 'px',
							'maxlength' => '',
						),
						array (
							'key' => 'padding_right_layout_setting',
							'label' => 'Right',
							'name' => 'padding_right',
							'type' => 'number',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array (
								'width' => '',
								'class' => '',
								'id' => '',
							),
							'default_value' => '',
							'placeholder' => '0',
							'prepend' => '',
							'append' => 'px',
							'maxlength' => '',
						),
					),
				),
			),
		);