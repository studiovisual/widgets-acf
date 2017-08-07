<?php
Class AcfWidget {

	static function get_base(){

		$base_fields = array (
			'key' => 'group_widgets_ativo',
			'title' => 'Widgets',
			'fields' => array (
				array (
					'key' => 'field_tamanho_da_grid',
					'label' => 'tamanho da grid',
					'name' => 'tamanho_da_grid',
					'type' => 'repeater',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array (
						'width' => '',
						'class' => '',
						'id' => '',
						),
					'collapsed' => '',
					'min' => 1,
					'max' => 0,
					'layout' => 'row',
					'button_label' => 'Adicionar Grid',
					'sub_fields' => array (
						array(
							'key' => 'field_tamanhos_grid',
							'label' => 'Tamanhos',
							'name' => 'tamanhos_grid',
							'type' => 'radio',
							'instructions' => '',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array (
								'width' => '',
								'class' => '',
								'id' => '',
								),
							'choices' => array (
								1 => '1',
								2 => '2',
								3 => '3',
								4 => '4',
								5 => '5',
								6 => '6',
								),
							'allow_null' => 0,
							'other_choice' => 0,
							'save_other_choice' => 0,
							'default_value' => 3,
							'layout' => 'vertical',
							'return_format' => 'value',
							),
						1=>array(),
						2=>array (
							'key' => 'field_the_contents',
							'label' => 'Seleção de conteudo',
							'name' => 'select-the-contents',
							'type' => 'flexible_content',
							'instructions' => 'Insira, pegue e arraste os widgets selecinados.',
							'required' => 0,
							'conditional_logic' => 0,
							'wrapper' => array (
								'width' => '',
								'class' => '',
								'id' => '',
								),
							'button_label' => 'Adicionar Widget',
							'min' => '',
							'max' => '',
							'layouts' => array (),//Layout widgets
							),
						),
					)
				),
			'location' => array (),
			'menu_order' => 0,
			'position' => 'acf_after_title',
			'style' => 'default',
			'label_placement' => 'top',
			'instruction_placement' => 'label',
			'hide_on_screen' => array (
				0 => 'the_content',
				1 => 'excerpt',
				),
			'active' => 1,
			'description' => '',
			);

		return $base_fields;
	}

}
?>